const express = require('express');
const router = express.Router();

const Item = require('../Models/Item');

router.get('/', (req,res) =>{
    Item.find()
        .sort({date:-1})
        .then(items=> res.json(items));
})

router.post('/', (req,res)=>{
    
})