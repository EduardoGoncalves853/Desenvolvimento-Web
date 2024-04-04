import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";

export const router = Router();

routes.use(authRoutes);
routes.use(userRoutes);