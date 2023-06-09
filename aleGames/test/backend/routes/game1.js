const express = require("express");
const router = express.Router();
const GameController = require("../controllers/game1Controller");
const Game1 = require("../models/game1Model");

router.get("/", GameController.getAllGames);

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const game = await Game1.findById(_id);
    res.json(game);
    console.log("juego encontrado!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const gameData = req.body;
    await GameController.createGameInDatabase(gameData);
    res.status(201).json({ message: 'Juego creado exitosamente' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game1.findByIdAndUpdate(id, req.body, { new: true });
    res.json(game);
    console.log("juego actualizado!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Game1.findByIdAndDelete(id);
    res.status(204).send();
    console.log("juego borrado!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
