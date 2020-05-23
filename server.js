const express = require('express') 
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.set("view engine", "njk")
server.use(express.static('public'))

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){       
    return res.render("index")            
})

server.get("/kits", function(req, res){       
    return res.render("kits", {items: videos}) 
})

server.listen(5000, function(){         
    console.log("Server is Running!");  
})  