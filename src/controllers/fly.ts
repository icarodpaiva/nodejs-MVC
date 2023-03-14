import { RequestHandler } from 'express'

export const fly: RequestHandler = (req, res) => {
  const { origem, destino } = req.params
  res.send(`voo de ${origem} até ${destino}`)
}
