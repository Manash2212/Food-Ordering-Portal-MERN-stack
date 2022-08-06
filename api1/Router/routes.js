const { request } = require('express');
const express = require('express');
const router = express.Router()
const category = require('../DB/dbSchema')
const categoryitem = require('../DB/dbcategoryitem')

const arr = []

router.get('/foodcategory', async (req, res) => {

    // return
    // console.log("This is from fooditems")
    const find = await category.find();

    // console.log(find)
    res.send(find);
})

router.get('/items/:id', async (req, res) => {
    try {
        //let obj="62af480f56b61cd0304dee87"  ;    
        const result = await categoryitem.find({ categoryid: req.params.id })
        //console.log(result)
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})

module.exports = router;

