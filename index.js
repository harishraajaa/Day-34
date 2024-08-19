import express from 'express'
import AppRoutes from './src/routes/index.routes.js'

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(AppRoutes)

app.listen(PORT,()=>console.log(`App server is running in ${PORT}`))