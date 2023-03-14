import { RequestHandler } from 'express'

export const name: RequestHandler = (req, res) => {
  const { nome } = req.query
  res.render('pages/nome', { nome })
}

export const age: RequestHandler = (req, res) => {
  const { anoNascimento } = req.query
  let age: number | null = null

  if (anoNascimento && typeof anoNascimento === 'string') {
    const actualYear = new Date().getFullYear()
    age = actualYear - parseInt(anoNascimento)
  }

  res.render('pages/idade', { age })
}
