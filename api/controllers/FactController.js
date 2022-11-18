'use strict'

let model=require('../model/Data')
module.exports = {
    getAll:async (req, res) => {
        try {
            const result=await model.getAll()
            res.json(result)
          } catch(err) {
            res.json({mess:"ERR"})
          }
       
    },
    get:async (req,res)=>{
        let id=req.params.id
        try {
            const data=await model.get(id)
            res.send(JSON.stringify(data))
          } catch(err) {
            res.json({mess:"ERR"})
          }
    },
    getByProvince:async (req,res)=>{
        let province=req.params.province
        try {
            const data=await model.getByProvince(province)
            res.send(JSON.stringify(data))
          } catch(err) {
            res.json({mess:"ERR"})
          }
    },
    getByArea:async (req,res)=>{
        let area=req.params.area
        try {
            let area=req.params.area
            const data=await model.getByArea(area)
          } catch(err) {
            res.json({mess:"ERR"})
          }
    },
    getByDate:async (req,res)=>{
        let date=req.params.date
        try {
            const data=await model.getByDate(date)
            res.send(JSON.stringify(data))
          } catch(err) {
            res.json({mess:"ERR"})
          }
    },
    
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        try{
            const result=await model.update(id,data)
            if(result.affectedRows>0) res.json({mess:true})
            else  res.json({mess:false}) 
        } catch(err) {
            res.json({mess:false})    
          }
    },
    delete:async(req, res) => {
        let id = req.params.id;
        try{
            const result=await model.delete(id)
            if(result.affectedRows>0) res.json({mess:true})
            else  res.json({mess:false}) 
        } catch(err) {
            res.json({mess:false})    
          }
    },
    insert:async (req, res) => {
        let data = req.body;
        try{
            const result=await model.insert(data)
            if(result.affectedRows>0) res.json({mess:true})
            else  res.json({mess:false}) 
        } catch(err) {
            res.json({mess:false})    
          }
    }
    
}