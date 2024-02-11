const http = require('http');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
});

const port_no = 8081;

server.listen(port_no, () =>{
    console.log('Server is running on port '+ port_no);
});