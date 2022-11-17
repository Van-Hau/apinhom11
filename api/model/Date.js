'use strict'
const mysql = require('mysql')
const pool = require('../database/datawarehouseDb')
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
            let sql = 'select * from date_dim'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,handler);
            });
        }
    ),
    get: async (id)=>new Promise(
        (resolve,reject)=>{
            const handler = (error, result) => {
                if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
            let sql = 'select * from date_dim where id=?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[id],handler);
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
            let sql = 'UPDATE date_dim SET ? WHERE id = ?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[data,id],handler);
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
            let sql = 'DELETE FROM date_dim WHERE id = ?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[id],handler);
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
            let sql = 'INSERT INTO date_dim SET ?'
            pool.getConnection(function(err, connection) {
                if (err) {
                    connection.release();
                    res.json({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                connection.query(sql,[data],handler);
            });
        }
    )
}