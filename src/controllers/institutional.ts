import { RequestHandler } from 'express'

export const about: RequestHandler = (req, res) => {
  res.render('pages/sobre')
}

export const contact: RequestHandler = (req, res) => {
  res.render('pages/contato')
}
