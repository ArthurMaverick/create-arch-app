
import { Router, Express } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

// passa o Router do express para o arquivo routes.ts
export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  const paths = path.join(__dirname, '..', 'routes')

  readdirSync(paths).map(async (file) => {
    const routeImports = (await import(`../routes/${file}`)).default
    routeImports(router)
  })
}