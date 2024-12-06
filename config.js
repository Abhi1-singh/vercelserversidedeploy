const mysql = require('mysql');
const connection = mysql.createConnection({
    user:'root',
    pass:"",
    host:'localhost',
    port:3306,
    database:'company2'
})
connection.connect(function(err){
    if(err){
    console.log("error occured....", err.sqlMessage);
    }
    else{
        console.log("connection  established....");
    }
})
module.exports = connection;