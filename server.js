const express = require('express') 
const server = express() 
const nunjucks = require('nunjucks') 
const videos = require("./data")               

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.set("view engine", "njk")

server.use(express.static('public')) 

server.get("/", function(req, res){
    const dataIndex = {
        avatar_url: "https://gravadora.novotempo.com/artistas/artista_11.jpeg",
        name: "Arautos ",
        surname: "do Rei",
        description: "Este material está sendo disponível para que você possa ensaiar com seu quarteto. Apreveite! Deus os Abençoe.",
        links: [
            { name:"YouTube", url:"https://www.youtube.com/channel/UCldCtvi4dAqZvd5-QLf5QvQ"},
            { name:"Facebook", url:"https://www.facebook.com/arautosdoreioficial"},
            { name:"Instagram", url:"https://www.instagram.com/arautosdoreioficial/"}
        ]
    }
    return res.render("index", {dataIndex})            
})

 
server.get("/kits", function(req, res){         
    return res.render("kits", {items: videos})  
})

server.listen(5500, function(){         
    console.log("Server is Running!");  
})                                       