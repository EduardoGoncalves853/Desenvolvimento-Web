import { Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    const { id, name, age } = req.body;

    if (id && name && age) {
      res.json({ user: `user ${id} created!` });
      return;
    }
    res.json({ user: `user not created!` });
  },
  
  read(req: Request, res: Response) {
    const { id } = req.params;
    res.json({ user: id });
  },
};
