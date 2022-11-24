'use strict'
const mysql = require('mysql')
const pool = require('../database/datawarehouseDb')
const DataModel=require('../model/Data')
module.exports = {
    getAll: async ()=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = `SELECT * from data_mart
           `
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,handler);
                connection.release();
            });
        }
    ),
    getByProvince: async (province)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = `SELECT * from data_mart
           `
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
            let sql =`SELECT * from data_mart
           `
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
    getByDate: async ()=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = `SELECT * from data_mart ORDER BY Award
           `
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,handler);
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
            let sql =`SELECT * from data_mart
           `
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
    update:async (id,data)=>{
        var newData={
            Id:data.Id,
            Province:data.Province,
            Area:data.Area,
            Date:data.Date,
            Award:data.Award,
            Number_result:data.Number_result,
            Value:data.Value,
            isDelete:data.isDelete
        }
        var result=await DataModel.update(id,newData)
        return result
    }
   ,
    delete:async (id)=>{
        
        var result=await DataModel.delete(id)
        return result
    },
    truncate:async ()=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = 'truncate table data_mart'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,handler);
                connection.release();
            });
        }
    ),
    insert:async (data)=>{
        var result=await DataModel.insert(data)
        return result
    }
}