'use strict'

let dataModel=require('../model/Data')
module.exports = {
    getAll:async (req, res) => {
        const result=await dataModel.getAll()
        res.json(result)
    },
    get:async (req,res)=>{
        let id=req.params.id
        const data=await dataModel.get(id)
        res.send(JSON.stringify(data))
    },
    getByProvince:async (req,res)=>{
        let province=req.params.province
        const data=await dataModel.getByProvince(province)
        res.send(JSON.stringify(data))
    },
    getByArea:async (req,res)=>{
        let area=req.params.area
        const data=await dataModel.getByArea(area)
        res.send(JSON.stringify(data))
    },
    getByDate:async (req,res)=>{
        let date=req.params.date
        const data=await dataModel.getByDate(date)
        res.send(JSON.stringify(data))
    },
    get:async (req,res)=>{
        let id=req.params.id
        const data=await dataModel.get(id)
        res.send(JSON.stringify(data))
    },
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        const result=await dataModel.update(id,data)
        if(result.affectedRows>=0) res.json({mess:true})
        else res.json({mess:false})    },
    delete:async(req, res) => {
        let id = req.params.id;
        const result=await dataModel.delete(id)
        if(result.affectedRows>=0) res.json({mess:true})
        else res.json({mess:false})    },
    insert:async (req, res) => {
        let data = req.body;
        const result=await dataModel.insert(data)
        if(result.affectedRows>=0) res.json({mess:true})
        else res.json({mess:false})    }
    
}