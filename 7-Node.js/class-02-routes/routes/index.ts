import { Router } from "express";

export const router = Router();

router.get("/", (_req, res) => {
  res.send({ name: "Son Goku" });
});

router.get("/dragonBall", (_req, res) => {
  res.send([
    { id: 1, name: "Goku" },
    { id: 2, name: "Chichi" },
    { id: 3, name: "Gohan" },
    { id: 8001, name: "Vegeta" },
  ]);
});

// route params
router.get("/user/:id/:name", (req, res) => {
  const { id, name } = req.params;
  res.send({ id, name });
});

// query params
router.get("/user", (req, res) => {
  const { id, name, age } = req.query;
  res.send({ id, name, age });
});

// body params
router.post("/user", (req, res) => {
  const { id, name, age } = req.body;
  console.log({ id, name, age });
  res.send({ status: "User create" });
});
