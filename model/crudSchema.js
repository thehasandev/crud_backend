const mongoose = require ('mongoose');
const { Schema } = mongoose;

const createTodo = new Schema({
    name : {
        type : String
    },
    des : {
        type : String
    }
})

module.exports = mongoose.model("Item",createTodo)
