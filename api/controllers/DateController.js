'use strict'
let dateModel=require('../model/Date')
module.exports = {
    getAll:async (req, res) => {
        const result=await dateModel.getAll()
        res.json(result)
    },
    get:async (req,res)=>{
        let id=req.params.id
        const data=await dateModel.get(id)
        res.send(JSON.stringify(data))
    },
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        const result=await dateModel.update(id,data)
        if(result.affectedRows>=0) res.json({mess:true})
        else res.json({mess:false})    },
    delete:async(req, res) => {
        let id = req.params.id;
        const result=await dateModel.delete(id)
        if(result.affectedRows>=0) res.json({mess:true})
        else res.json({mess:false})    },
    insert:async (req, res) => {
        let data = req.body;
        const result=await dateModel.insert(data)
        if(result.affectedRows>=0) res.json({mess:true})
        else res.json({mess:false})    }
    
}