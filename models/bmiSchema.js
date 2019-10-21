const mongoose = require('mongoose');

const bmiSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    inputs: [Number],
    outputs: []
})

module.exports = BMI = mongoose.model('bmi', bmiSchema)