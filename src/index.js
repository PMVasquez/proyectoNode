/*var http= require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'}); 
    response.end('Holassss que tannn');
}).listen(5000);

console.log('servidor en la url http://127.0.0.1:5000');*/
var expr= require("express");

const constantes= require('../src/const/globalConstants.js')
var const1= constantes.constante1

var app= expr();
app.get('/',function(req,res){
    res.send("Holasss nodemon HI: " + const1);
});

app.post('/',function(req,res){
    res.send('POST hola');
})

app.listen(3000,function(){
    console.log("escuchando al puerto 3000");
})