import { Router } from 'express'

import users from './users'
import classify from './classify'
import article from './article'
import draft from './draft'
import  login from './login'
import user from './user'
import comment from './comment'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(classify)
router.use(article)
router.use(draft)
router.use(login)
router.use(user)
router.use(comment)

export default router
