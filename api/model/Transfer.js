'use strict'
let dataModel=require('../model/Data')
let martModel=require('../model/Mart')
module.exports = {
    getAll: async ()=>{
        var listData= await dataModel.getAll()
        
        for (var i = 0; i < listData.length; i++){
           var data=listData[i]
           console.log(data)
          await martModel.insert(data)
        }
        var listMart=await martModel.getAll()
       // console.log('du lieu '+listMart)
        await martModel.truncate()
        return listMart

    }   
    ,
    getByProvince: async (province)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = 'select * from data_mart where province=?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[province],handler);
                connection.release();
            });
        }
    )
    ,
    getByArea: async (area)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = 'select * from data_mart where area=?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[area],handler);
                connection.release();
            });
        }
    )
    ,
    getByDate: async (date)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = 'select * from data_mart where Date=?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[date],handler);
                connection.release();
            });
        }
    )
    ,
    get: async (id)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = 'select * from data_mart where id=?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[id],handler);
                connection.release();
            });
        }
    )
    ,
    update:async (id,data)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = 'UPDATE data_mart SET ? WHERE id = ?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[data,id],handler);
                connection.release();
            });
        }
    )
   ,
    delete:async (id)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = 'DELETE FROM data_mart WHERE id = ?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[id],handler);
                connection.release();
            });
        }
    ),
    insert:async (data)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = 'INSERT INTO data_mart SET ?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[data],handler);
                connection.release();
            });
        }
    )
}
