'use strict'
let provinceModel=require('../model/Province')
module.exports = {
    getAll:async (req, res) => {
        const result=await provinceModel.getAll()
        res.json(result)
    },
    get:async (req,res)=>{
        let id=req.params.id
        const data=await provinceModel.get(id)
        res.send(JSON.stringify(data))
    },
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        const result=await provinceModel.update(id,data)
        if(result.affectedRows>=0) res.json({mess:'Update success !'})
    },
    delete:async(req, res) => {
        let id = req.params.id;
        const result=await provinceModel.delete(id)
        if(result.affectedRows>=0) res.json({mess:'Delete Success !'})
    },
    insert:async (req, res) => {
        let data = req.body;
        const result=await provinceModel.insert(data)
        if(result.affectedRows>=0) res.json({mess:'Insert Success !'})
    }
    
}