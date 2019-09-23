const server = require('./API/server')

const PORT = process.env.PORT || 5005

server.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}...`)
})