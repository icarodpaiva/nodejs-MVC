import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('pagina inicial do painel')
})

router.get('/adicionar', (req, res) => {
  res.send('adicionar algo ao painel')
})

export default router
