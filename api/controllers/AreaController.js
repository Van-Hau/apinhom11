'use strict'
let areaModel=require('../model/Area')
module.exports = {
    getAll:async (req, res) => {
        try {
            const result=await areaModel.getAll()
            res.json(result)
          } catch(err) {
            res.json({mess:"ERR"})
          }
       
    },
    get:async (req,res)=>{
        let id=req.params.id
        try{
            const data=await areaModel.get(id)
            res.send(JSON.stringify(data))
        } catch(err) {
            res.json({mess:"ERR"})
          }
       
    },
    update:async(req, res) => {
        let data = req.body;
        let id = req.params.id;
        try{
            const result=await areaModel.update(id,data)
            if(result.affectedRows>0) res.json({mess:true})
            else  res.json({mess:false}) 
        } catch(err) {
            res.json({mess:false})    
          }
    },
    delete:async(req, res) => {
        let id = req.params.id;
        try{
            const result=await areaModel.delete(id)
            if(result.affectedRows>0) res.json({mess:true})
            else  res.json({mess:false}) 
        } catch(err) {
            res.json({mess:false})    
          }
    },
    insert:async (req, res) => {
        let data = req.body;
        try{
            const result=await areaModel.insert(data)
            if(result.affectedRows>0) res.json({mess:true})
            else  res.json({mess:false}) 
        } catch(err) {
            res.json({mess:false})    
          }
    }
    
}