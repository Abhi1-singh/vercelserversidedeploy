const express = require('express');
const connection = require('./config')
const app = express();
app.use(express.json());
const port = 6700;

app.post('/adduser',function(req,res){
    let data = req.body;
    connection.query("INSERT INTO employee SET ?", data, function(error,result){
     if(error) {
        console.log("error",error.sqlMessage);
     } 
     else{
        res.send(result);
     } 
    })
})
app.get("/viewemployee",function(req,res){
    let query1= "SELECT * FROM employee";
    connection.query(query1, function(error,result){
        if(error) {
           console.log("error",error.sqlMessage);
        } 
        else{
           res.send(result);
        } 
       })

})
app.delete('/deleteemployee/:id',function(req,res){
    let data = req.params.id;
    let query = "DELETE FROM employee WHERE id =?";
    connection.query(query,data,function(error,result){
        if(error) {
            console.log("error",error.sqlMessage);
         } 
         else{
            res.send(result);
         }   
    })
})
app.patch('/updateemployee/:id',function(req,res){
    let data = [req.body.name,req.body.dep,req.body.pass,req.params.id]
    let query = "UPDATE employee SET name=?, dep=?,pass=? WHERE id=?"
    connection.query(query,data,function(error,result){
        if(error) {
            console.log("error",error.sqlMessage);
         } 
         else{
            res.send(result);
         }   
    });
})
// app.put('/putemployee/:id',function)
app.listen(port,()=>{
    console.log(`server running on ${port} port`)
})