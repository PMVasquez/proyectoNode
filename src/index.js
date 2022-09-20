/*var http= require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'}); 
    response.end('Holassss que tannn');
}).listen(5000);

console.log('servidor en la url http://127.0.0.1:5000');*/
const expr= require("express");
const routerConfig = require('./routes/index.routes')
const constantes= require('../src/const/globalConstants');
const globalConstants = require("../src/const/globalConstants");

const configuracionApi = (app) =>{  //configurar la api
    app.use(expr.json())         //para q la api pueda recibir json
    app.use(expr.urlencoded({ extended:true })) //para q la api pueda recibir formularios
    return;
};

const configuracionRouter = (app) =>{  //config rutas
    app.use('/api/', routerConfig.rutas_init())  //para acceder a las rutas de la api siempre deberá empezar con /api/
    
};

const init = () =>{
    const app= expr();       
    configuracionApi(app);
    configuracionRouter(app);
    app.listen(globalConstants.PORT,function(){
        console.log("escuchando al puerto:" + globalConstants.PORT);
    })
}

init();

//var const1= constantes.constante1

//var app= expr();
// app.get('/',function(req,res){
//     res.send("Holasss nodemon HI: " + const1);
// });

// app.post('/',function(req,res){
//     res.send('POST hola');
// })

// app.listen(3000,function(){
//     console.log("escuchando al puerto 3000");
// })