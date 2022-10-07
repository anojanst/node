const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("This is home page")
    }
    if (req.url === "/about") {
        res.end("This is about page")
    }
})

server.listen(5000)