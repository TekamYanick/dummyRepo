const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(
        `
        <h1>Ooops !</h1>
        <p>We can't see the page you are looking for</p>
        <a href="/">Back Home</a>
        `
    );
}); // createServer() takes in two parameters, request and response

server.listen(5000); // Open browser and type localhost:5000