import { Router } from "express";

export const router = Router();

router.get("/", (_req, res) => {
  res.send({ name: "Eduardo" });
});

router.get("/dragonBall", (_req, res) => {
  res.send([
    { id: 1, name: "Goku" },
    { id: 100, name: "Vegeta" },
    { id: 5, name: "Gohan" },
  ]);
});
