const express = require("express")
const welcomeRouter = require("./welcome/welcome-router")
const projectsRouter = require("./projects-router")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())

server.use("/", welcomeRouter)
server.use(projectsRouter)

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
