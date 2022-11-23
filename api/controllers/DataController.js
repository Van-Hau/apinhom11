'use strict'
let model=require('../model/Mart')
const transferModel=require('../model/Transfer')
module.exports = {
    getAll:async (req, res) => {
        try {
             const importRow=await transferModel.getAll()
             const result=await model.getAll()
            const truncateRow=await model.truncate()
            res.json(result)
          } catch(err) {
           //throw(err)
            res.json({mess:"ERR"})
          }
       
    },
    get:async (req,res)=>{
        let id=req.params.id
        try{
            const importRow=await transferModel.get(id)
            const data=await model.get(id)
            const truncateRow=await model.truncate()
            res.send(JSON.stringify(data))
        } catch(err) {
           
           res.json({mess:"ERR"})
          }
       
    }
    ,
    getByProvince: async (req,res)=>{
        let province=req.params.province
        try{
            const importRow=await transferModel.getByProvince(province)
            const data=await model.getByProvince(province)
            const truncateRow=await model.truncate()
            res.send(JSON.stringify(data))
        } catch(err) {
           
            res.json({mess:"ERR"})
          }
       
    }
    ,
    getByArea: async (req,res)=>{
        let area=req.params.area
        try{
            const importRow=await transferModel.getByArea(area)
            const data=await model.getByArea(area)
            const truncateRow=await model.truncate()
            res.send(JSON.stringify(data))
        } catch(err) {
            res.json({mess:"ERR"})
          }
       
    }
    ,
    getByDate: async (req,res)=>{
        let date=req.params.date
        try{
            const importRow=await transferModel.getByDate(date)
            const data=await model.getByDate(date)
            const truncateRow=await model.truncate()
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