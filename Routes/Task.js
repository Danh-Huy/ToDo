const express = require('express')
const route = express.Router()
const Task = require('../Models/Task')

function convertStringToDate(StringDate){
    return StringDate
}

route.get('/',(req,res,next)=>{
    Task.find({}).lean()
    .then(data =>{
        console.log(data)
       res.json(data)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

route.get('/:id',(req,res,next)=>{
    Task.find({_id : req.params.id}).lean()
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

route.post('/',(req,res,next)=>{
    Task.create({
        name : req.body.name,
        date: convertStringToDate(req.body.date)
    })
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

route.put('/:id',(req,res,next)=>{
    var newData={}
    if (req.body.newName)
        newData.name = req.body.newName
    if (req.body.newDate)
        newData.date = convertStringToDate(req.body.newDate)
        
    Task.updateOne({_id: req.params.id},
        newData)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

route.delete('/:id',(req,res,next)=>{
    Task.deleteOne({
        _id: req.params.id
    })
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

module.exports =  route