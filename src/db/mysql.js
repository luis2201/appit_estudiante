const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function connMysql()
{
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(connMysql, 200);
        } else {
            console.log('DB Conectado')
        }
    });

    conexion.on('error', err => {
        console.log('[db error]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            connMysql();
        } else {
            throw err;
        }
    })
}

connMysql();

function FindAll(tabla)
{
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    })
}

function FindId(tabla, id)
{

}

function Save(tabla, data)
{

}

function Delete(tabla, id)
{

}

module.exports = {
    FindAll,
    FindId,
    Save,
    Delete
}