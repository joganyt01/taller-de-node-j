const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'div/html'});
    res.end('<div>eehhjajaja</div>');
});

server.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:4000');
});