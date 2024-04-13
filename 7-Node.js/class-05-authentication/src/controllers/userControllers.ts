import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { userRepository } from "../repositories/userRepository";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          name: z
            .string({
              required_error: "Não tem nome não é?",
              invalid_type_error: "Só texto minino dos ói grande!",
            })
            .min(3, "Mínimo  de 3 caracteres!")
            .max(255, "limite máximo atingido"),

          email: z
            .string({
              required_error: "email obrigatório!",
              invalid_type_error: "Somente texto!",
            })
            .email({ message: "Email inválido!" })
            .max(255, "limite máximo atingido"),

          password: z
            .string({
              required_error: "Senha obrigatória!",
              invalid_type_error: "Para a senha use o tipo textual!",
            })
            .min(7, { message: "Senha com mínimo de 7 caracteres " })
            .max(255, "limite máximo atingido")
            .regex(
              /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              {
                message:
                  "A senha  deve conter pelo menos uma letra maiúscula, um número e um caractere especial",
              }
            ),
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);
      const userExists = await userRepository.getByEmail(email);

      if (userExists)
        throw res.status(400).json({ message: "email already exists" });

      const userCreated = await userRepository.create({
        name,
        email,
        password,
      });

      return res.status(201).json({ message: "user created", userCreated });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const userID = req.userID;
      const user = await userRepository.getById(userID);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const { name, email } = user;

      return res.status(200).json({ name, email });
    } catch (error) {
      return next(error);
    }
  },
};
