import { Router } from 'express'
import { home } from '../controllers/home'
import { about, contact } from '../controllers/institutional'
import { age, name } from '../controllers/user'
import { fly } from '../controllers/fly'

const router = Router()

// home routes
router.get('/', home)

// institutional routes
router.get('/sobre', about)
router.get('/contato', contact)

// user routes
router.get('/nome', name)
router.get('/idade', age)

// fly routes
router.get('/voo/:origem-:destino', fly)

export default router
