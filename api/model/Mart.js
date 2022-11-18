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
            let sql = `select data.Id,data.Province,data.Area,data.Date,data.Award,data.Number_result,data.Value,data.isDelete,data.Date_expire
            ,tinh_thanh.name as Province_Fact,khu_vuc.area as Area_Fact,dateOpen.date as Date_Fact,giai.Name_award as Name_award_Fact,dim_expire.date as Date_expire_Fact
            from data INNER JOIN giai on giai.id=data.Award INNER JOIN
             khu_vuc on khu_vuc.id=data.Area INNER JOIN date_dim dateOpen on dateOpen.id=data.Date INNER JOIN
              tinh_thanh on tinh_thanh.id=data.Province INNER JOIN date_dim dim_expire on dim_expire.id=data.Date_expire
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
            let sql = `select data.Id,data.Province,data.Area,data.Date,data.Award,data.Number_result,data.Value,data.isDelete,data.Date_expire
            ,tinh_thanh.name as Province_Fact,khu_vuc.area as Area_Fact,dateOpen.date as Date_Fact,giai.Name_award as Name_award_Fact,dim_expire.date as Date_expire_Fact
            from data INNER JOIN giai on giai.id=data.Award INNER JOIN
             khu_vuc on khu_vuc.id=data.Area INNER JOIN date_dim dateOpen on dateOpen.id=data.Date INNER JOIN
              tinh_thanh on tinh_thanh.id=data.Province INNER JOIN date_dim dim_expire on dim_expire.id=data.Date_expire
              where data.Province=?
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
            let sql =`select data.Id,data.Province,data.Area,data.Date,data.Award,data.Number_result,data.Value,data.isDelete,data.Date_expire
            ,tinh_thanh.name as Province_Fact,khu_vuc.area as Area_Fact,dateOpen.date as Date_Fact,giai.Name_award as Name_award_Fact,dim_expire.date as Date_expire_Fact
            from data INNER JOIN giai on giai.id=data.Award INNER JOIN
             khu_vuc on khu_vuc.id=data.Area INNER JOIN date_dim dateOpen on dateOpen.id=data.Date INNER JOIN
              tinh_thanh on tinh_thanh.id=data.Province INNER JOIN date_dim dim_expire on dim_expire.id=data.Date_expire
              where data.Area=?
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
    getByDate: async (date)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = `select data.Id,data.Province,data.Area,data.Date,data.Award,data.Number_result,data.Value,data.isDelete,data.Date_expire
            ,tinh_thanh.name as Province_Fact,khu_vuc.area as Area_Fact,dateOpen.date as Date_Fact,giai.Name_award as Name_award_Fact,dim_expire.date as Date_expire_Fact
            from data INNER JOIN giai on giai.id=data.Award INNER JOIN
             khu_vuc on khu_vuc.id=data.Area INNER JOIN date_dim dateOpen on dateOpen.id=data.Date INNER JOIN
              tinh_thanh on tinh_thanh.id=data.Province INNER JOIN date_dim dim_expire on dim_expire.id=data.Date_expire
           `
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
            let sql =`select data.Id,data.Province,data.Area,data.Date,data.Award,data.Number_result,data.Value,data.isDelete,data.Date_expire
            ,tinh_thanh.name as Province_Fact,khu_vuc.area as Area_Fact,dateOpen.date as Date_Fact,giai.Name_award as Name_award_Fact,dim_expire.date as Date_expire_Fact
            from data INNER JOIN giai on giai.id=data.Award INNER JOIN
             khu_vuc on khu_vuc.id=data.Area INNER JOIN date_dim dateOpen on dateOpen.id=data.Date INNER JOIN
              tinh_thanh on tinh_thanh.id=data.Province INNER JOIN date_dim dim_expire on dim_expire.id=data.Date_expire
              where data.Id=?
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