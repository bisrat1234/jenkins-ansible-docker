const http = require('node:http')
const port = process.env.Port || 9090
http.createServer((req,res) => {

    res.writeHead(200)

    res.end("hello world")

}).listen(port,() => {

    console.log(`[Server status] server started on port ${port}`)

})