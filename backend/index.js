import express from 'express';

// Abstraction
const server = express();

// start the server / bind the server to a port
const PORT = 8080;
function onSuccess(){
    console.log(`Server is listening on port ${PORT}`);
}

server.listen(PORT, onSuccess);

// Server side routing
// (endpoint, method) --> (handler)
// GET (read), POST (create), PUT (update), DELETE (delete) : CRUD operations

const todos = [];

// Routes & Handlers
server.get('/', (req, res) => {
    console.log(req.url, req.method);

    res.json({
        message: 'Hello from Express Server'
    });
});