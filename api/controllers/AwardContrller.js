'use strict'
let awardModel=require('../model/Award')
module.exports = {
    getAll:async (req, res) => {
        const result=await awardModel.getAll()
        res.json(result)
    },
    get:async (req,res)=>{
        let id=req.params.id
        const data=await awardModel.get(id)
        res.send(JSON.stringify(data))
    },
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        const result=await awardModel.update(id,data)
        if(result.affectedRows>=0) res.json({mess:'Update success !'})
    },
    delete:async(req, res) => {
        let id = req.params.id;
        const result=await awardModel.delete(id)
        if(result.affectedRows>=0) res.json({mess:'Delete Success !'})
    },
    insert:async (req, res) => {
        let data = req.body;
        const result=await awardModel.insert(data)
        if(result.affectedRows>=0) res.json({mess:'Insert Success !'})
    }
    
}