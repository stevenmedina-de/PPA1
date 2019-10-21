const mongoose = require('mongoose');

const shortestDistanceSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    inputs: [Number],
    outputs: Number
})

module.exports = shortestDistance = mongoose.model('shortestDistance', shortestDistanceSchema)