import { Request, Response, NextFunction } from "express";

export const fileControllers = {
  async upload(req: Request, res: Response, next: NextFunction) {
    try {
     
      return res.status(200).json({ status: `Noossa que legal!` });
    } catch (error) {
      next(error);
    }
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ user: id });
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, age } = req.body;

      if (id && name && age) {
        console.log("updated", { id, name, age });
        return res.status(200).json({ status: `user ${id} updated!` });
      }

      throw res.status(400).json({ status: "user not updated!" });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({ message: `file deleted!` });
    } catch (error) {
      return next(error)
    }
  },  
};
