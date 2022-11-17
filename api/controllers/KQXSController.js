'use strict'
let kqxsModel=require('../model/KQXS')
module.exports = {
    getAll:async (req, res) => {
        const result=await kqxsModel.getAll()
        res.json(result)
    },
    get:async (req,res)=>{
        let id=req.params.id
        const data=await kqxsModel.get(id)
        res.send(JSON.stringify(data))
    },
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        const result=await kqxsModel.update(id,data)
        if(result.affectedRows>=0) res.json({mess:true})
        else res.json({mess:false})    },
    delete:async(req, res) => {
        let id = req.params.id;
        const result=await kqxsModel.delete(id)
        if(result.affectedRows>=0) res.json({mess:true})
        else res.json({mess:false})    },
    insert:async (req, res) => {
        let data = req.body;
        const result=await kqxsModel.insert(data)
        if(result.affectedRows>=0) res.json({mess:true})
        else res.json({mess:false})    }
    
}