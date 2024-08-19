import express from 'express'
import AppRoutes from './src/routes/index.routes.js'

const app = express()

app.use(express.json())
app.use(AppRoutes)

app.listen('8000',()=>console.log("App server is running in 8000"))