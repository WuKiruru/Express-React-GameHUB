const mongoose = require('mongoose');

const game2Schema = new mongoose.Schema({
    name: String,
    age: Number,
    health: Number,
    happiness: Number,
    love: Date

}, { versionKey: false });

const Game2 = mongoose.model('Game2', game2Schema);

module.exports = Game2;
