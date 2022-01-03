import express from "express";

import { getAllCreatures, getCreatureById } from "../models/monsters.js"

const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  //Get all the creatures
  //Return them in response to my user
  const data = await getAllCreatures();
  res.json({ message: "All the creature information :D", payload: data });
});

router.get("/:id", async function(req, res, next) {
  //Get one of the creatures
  //Return them in response to a requsest
  const data = await getCreatureById();
  res.json({ message: "All the info for " + req.params.id, payload: data });
  
});

export default router;

