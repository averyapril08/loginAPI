const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    text:{
        type: String,
        required:true
    },
    column:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }



})

module.exports = Item = mongoose. model('Item',ItemSchema);