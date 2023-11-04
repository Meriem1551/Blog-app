const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req, res) => {
   //loadash
   const num = _.random(0, 20);
   console.log(num);
   const greet = _.once(() => {
        console.log('Hello');
   });
   greet();
     //set header content type
    res.setHeader('Content-Type', 'text/html');
    //  res.write('<p>Hello, ninjas</p>');
    //  res.write('<p>Hello again, ninjas</p>');
    //  res.end();

    let path  = './views';
    switch(req.url){
        case '/':
            path += '/index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404page.html'
            res.statusCode = 404;
            break;
    }
    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
        }
        res.end();
    })

});

server.listen(3000, 'localhost', () => {
    console.log("listening for requests on port 3000");
});