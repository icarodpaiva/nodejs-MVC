import express from 'express'
import mainRoutes from './routes'
import panelRoutes from './routes/panel'

const PORT = 3000
const server = express()

server.use('/', mainRoutes)
server.use('/painel', panelRoutes)
server.use((_, res) => {
  res.status(404).send('Página não encontrada')
})

server.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
)
