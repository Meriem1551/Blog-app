const http = require('http');

const server = http.createServer((req, res) => {
     console.log(req.url, req.method);

     //set header ontent type
     res.setHeader('Content-Type', 'text/html');

     res.write('<p>Hello, ninjas</p>');
     res.write('<p>Hello again, ninjas</p>');

     res.end();
});

server.listen(3000, 'localhost', () => {
    console.log("listening for requests on port 3000");
});