require('dotenv').config()
const http = require('http')

function requestController(req, res){
    console.log('Bienvenidos al curso')
    
    // Configurar headers CORS y Content-Type
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    
    // Respuesta simple
    const response = {
        message: 'Bienvenidos al curso',
        status: 'success',
        port: PORT,
        timestamp: new Date().toISOString()
    };
    
    res.end(JSON.stringify(response));
}

const server = http.createServer(requestController)
const PORT = process.env.PORT || 3000

// Escuchar en todas las interfaces
server.listen(PORT, '0.0.0.0', function(){
    console.log(`Aplicacion corriendo en puerto: ${PORT}`)
    console.log(`Servidor HTTP iniciado correctamente`)
})

// Manejar errores del servidor
server.on('error', (err) => {
    console.error('Error del servidor:', err)
})

// Confirmar que el servidor está escuchando
server.on('listening', () => {
    console.log(`Servidor escuchando en 0.0.0.0:${PORT}`)
})