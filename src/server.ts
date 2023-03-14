import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import mustache from 'mustache-express'
import mainRoutes from './routes'
import panelRoutes from './routes/panel'

dotenv.config()

const server = express()

const PORT = process.env.PORT ?? 3000

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use('/', mainRoutes)
server.use('/painel', panelRoutes)
server.use((_, res) => {
  res.status(404).send('Página não encontrada')
})

server.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
)
