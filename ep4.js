const http = require('http')
const url = require('url')
const querystring = require('querystring')

const port = process.argv[2]
    
if (!port) {
  console.log('usage: node e01.js <port>')
  process.exit(0)
}

const server = http.createServer((_, res) => {
    const {query} = url.parse(req.query);

    res.end()
})

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})