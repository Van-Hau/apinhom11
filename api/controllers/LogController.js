'use strict'
let logModel=require('../model/Log')
module.exports = {
    getAll:async (req, res) => {
        const result=await logModel.getAll()
        res.json(result)
    },
    get:async (req,res)=>{
        let id=req.params.id
        const data=await logModel.get(id)
        res.send(JSON.stringify(data))
    },
    getByStatus:async (req,res)=>{
        let status=req.params.getByStatus
        const data=await logModel.getByStatus(status)
        res.json(data)
    },
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        const result=await logModel.update(id,data)
        if(result.affectedRows>=0) res.json({mess:'Update success !'})
    },
    delete:async(req, res) => {
        let id = req.params.id;
        const result=await logModel.delete(id)
        if(result.affectedRows>=0) res.json({mess:'Delete Success !'})
    },
    insert:async (req, res) => {
        let data = req.body;
        const result=await logModel.insert(data)
        if(result.affectedRows>=0) res.json({mess:'Insert Success !'})
    }
    
}