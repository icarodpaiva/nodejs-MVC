import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('hello world')
})

router.get('/voo/:origem-:destino', (req, res) => {
  const { origem, destino } = req.params
  res.send(`voo de ${origem} até ${destino}`)
})

export default router
