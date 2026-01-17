import express from "express";
import Card from "../models/Card.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

export default router;
