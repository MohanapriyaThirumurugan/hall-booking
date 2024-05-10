import express from 'express'
import AppRoutes from './router/index.js'
import roomroutes from './router/room.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())

app.use('/', AppRoutes)
app.use('/room', roomroutes)

let date = new Date().toLocaleTimeString()
console.log(date)

app.listen(PORT, ()=>console.log(`Server Running at ${PORT}`))