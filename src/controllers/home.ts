import { RequestHandler } from 'express'
import { Product } from '../models/product'

export const home: RequestHandler = (req, res) => {
  const user = {
    name: 'Icaro Paiva',
    age: 26,
  }

  const showWelcome = true

  const products = Product.getAll()
  const cheapProducts = Product.getPriceLowerThan(13)
  const expensiveProducts = Product.getPriceGreatherThan(13)

  const messages = [
    'Mensagem 1',
    'Mensagem 2',
    'Mensagem 3',
    'Mensagem 4',
    'Mensagem 5',
  ]

  res.render('pages/home', {
    user,
    showWelcome,
    products,
    cheapProducts,
    expensiveProducts,
    messages,
  })
}
