'use strict'
let areaModel=require('../model/Area')
module.exports = {
    getAll:async (req, res) => {
        const result=await areaModel.getAll()
        console.log('size '+result.length)
        res.json(result)
    },
    get:async (req,res)=>{
        let id=req.params.id
        const data=await areaModel.get(id)
        res.send(JSON.stringify(data))
    },
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        const result=await areaModel.update(id,data)
        if(result.affectedRows>=0) res.json({mess:'Update success !'})
    },
    delete:async(req, res) => {
        let id = req.params.id;
        const result=await areaModel.delete(id)
        if(result.affectedRows>=0) res.json({mess:'Delete Success !'})
    },
    insert:async (req, res) => {
        let data = req.body;
        const result=await areaModel.insert(data)
        if(result.affectedRows>=0) res.json({mess:'Insert Success !'})
    }
    
}