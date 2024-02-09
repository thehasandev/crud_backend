const mongoose = require('mongoose');

const mongodbConfig =()=>{
    mongoose.connect('mongodb+srv://jahid:wx3UrCSVmYhfJ19Y@cluster0.px58yxr.mongodb.net/CRUD?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));
}
module.exports = mongodbConfig