'use strict'
let configModel=require('../model/Config')
module.exports = {
    getAll:async (req, res) => {
        const result=await configModel.getAll()
        res.json(result)
    },
    get:async (req,res)=>{
        let id=req.params.id
        const data=await configModel.get(id)
        res.send(JSON.stringify(data))
    },
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        const result=await configModel.update(id,data)
        if(result.affectedRows>=0) res.json({mess:'Update success !'})
    },
    delete:async(req, res) => {
        let id = req.params.id;
        const result=await configModel.delete(id)
        if(result.affectedRows>=0) res.json({mess:'Delete Success !'})
    },
    insert:async (req, res) => {
        let data = req.body;
        const result=await configModel.insert(data)
        if(result.affectedRows>=0) res.json({mess:'Insert Success !'})
    }
    
}