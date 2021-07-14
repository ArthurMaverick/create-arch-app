import { Router } from 'express'

export default (router: Router) => {
  router.post('/arch', (_req, res) => {
    res.json({clean_architecture: 'ok'})
  })
}