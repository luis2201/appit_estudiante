const db = require('../../db/mysql');
const tabla = 'tb_estudiante';

function FindAll()
{
    return db.FindAll(tabla);
}

module.exports = {
    FindAll,
}