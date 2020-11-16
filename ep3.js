const http = require('http')

const port = process.argv[2]
    
if (!port) {
  console.log('usage: node e01.js <port>')
  process.exit(0)
}

const server = http.createServer((_, res) => {
    res.setHeader("Content-Type", "text/html")
    res.write('<h1> Hello World!</h1>')
    res.end()
})

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})