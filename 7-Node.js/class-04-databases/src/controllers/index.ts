import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../databases/sqlite3";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, email, password } = req.body;
      const db = await sqliteConnection();
      await db.run(
        "INSERT INTO users (id ,name, email, password) VALUES (? ,?, ?,? )",
        [id, name, email, password]
      );
      return res.json({ message: "created!", id });
    } catch (error) {
      return next(error);
    }
  },
  read(req: Request, res: Response) {
    res.send({ message: "readed!" });
  },
  update(req: Request, res: Response) {
    res.send({ message: "updated!" });
  },
  delete(req: Request, res: Response) {
    res.send({ message: "deleted!" });
  },
};