const express = require('express') 

const server = express() 

server.get("/", function(req, res){     
    return res.send("Testando Servidor... ")
})                                      


server.listen(5000, function(){         
    console.log("Server is Running!");  
})  