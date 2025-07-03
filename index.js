require('dotenv').config()
const http = require('http')

function requestController(req, res){
    console.log('Bienvenidos al curso')
    
    // Configurar headers
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    // Enviar respuesta JSON
    res.end(JSON.stringify({
        message: 'Bienvenidos al curso',
        status: 'success',
        timestamp: new Date().toISOString()
    }));
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 4000

server.listen(PORT, '0.0.0.0', function(){
    console.log("Aplicacion corriendo en: " + PORT)
})

//Esteban Yahir Chávez Villalta