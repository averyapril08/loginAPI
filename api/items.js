const express = require('express');
const router = express.Router();

const Item = require('../Models/Item');

router.get('/', (req,res) =>{
    Item.find()
        .sort({date:-1})
        .then(items=> res.json(items));
})

router.post('/', (req,res)=>{
    const { inputText, columnNum} =req.body;
    const newItem = new Item({
        inputText,
        columnNum
    });
    newItem.save()
           .then(item=> res.json(item));
})

module.exports = router;