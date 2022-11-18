'use strict'
let model=require('../model/Config')
module.exports = {
    getAll:async (req, res) => {
        try {
            const result=await model.getAll()
            res.json(result)
          } catch(err) {
            res.json({mess:"ERR"})
          }
       
    },
    get:async (req,res)=>{
        let id=req.params.id
        try{
            const data=await model.get(id)
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