const mongoose = require('mongoose')

const jobScehma = new mongoose.Schema({
    position: {
        type: String,
        required: [true, 'Please provide a position'],
        maxLength: 50
    },
    company: {
        type: String,
        required: [true, 'Please provide a company name'],
        maxLength: 50
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a user']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Job', jobScehma)