import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  const user = {
    name: 'Icaro Paiva',
    age: 26,
  }

  const showWelcome = true

  const products = [
    {
      title: 'Produto X',
      price: 10,
    },
    {
      title: 'Produto Y',
      price: 15,
    },
    {
      title: 'Produto Z',
      price: 20,
    },
  ]

  const messages = [
    'Mensagem 1',
    'Mensagem 2',
    'Mensagem 3',
    'Mensagem 4',
    'Mensagem 5',
  ]

  res.render('pages/home', { user, showWelcome, products, messages })
})

router.get('/sobre', (req, res) => {
  res.render('pages/sobre')
})

router.get('/contato', (req, res) => {
  res.render('pages/contato')
})

router.get('/voo/:origem-:destino', (req, res) => {
  const { origem, destino } = req.params
  res.send(`voo de ${origem} até ${destino}`)
})

export default router
