const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    userId: {
        
    },
    title: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("task", taskSchema)