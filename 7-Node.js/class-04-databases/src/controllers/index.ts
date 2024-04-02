import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../databases/sqlite3";
import { compare, hash } from "bcrypt";
import { userRepository } from "../repositories/userRepository";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;

      const userEmail = await userRepository.getByEmail(email);

      if (userEmail)
        throw res.status(400).json({
          message: "email already exists",
        });

      const userCreated = await userRepository.create({
        name,
        email,
        password,
      });

      return res.status(201).json({ message: "created!", ...userCreated });
    } catch (error) {
      return next(error);
    }
  },
  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      // senha errada ↓
      if (!password) {
        throw res
          .status(400)
          .json({ message: "please confirm your password!" });
      }
      const user = await userRepository.getByID(id);

      // usuário diferente ↓
      if (!user) {
        throw res.status(404).json({ message: "User not found" });
      }
      // checa a senha(true || false)
      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const { name, email } = user;

      return res.status(200).json({ name, email });
    } catch (error) {
      return next(error);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, email, password, newPassword } = req.body;
      //* ↓
      const user = await userRepository.getByID(id);

      if (!user)
        throw res.status(404).json({
          message: "user not found!",
        });
      //* ↓
      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const userEmail = await userRepository.getByEmail(email);

      if (userEmail && userEmail.id != id)
        throw res.status(400).json({
          message: "email already exists",
        });

      const UserUpdated = await userRepository.update({
        id,
        name,
        email,
        password,
        newPassword,
      });

      return res.status(201).json(UserUpdated);
    } catch (error) {
      return next(error);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      const user = await userRepository.getByID(id);
      if (!user)
        throw res.status(404).json({
          message: "user not found!",
        });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const userDeleted = await userRepository.delete(id);
      return res.status(200).send(userDeleted);
    } catch (error) {
      return next(error);
    }
  },
};
