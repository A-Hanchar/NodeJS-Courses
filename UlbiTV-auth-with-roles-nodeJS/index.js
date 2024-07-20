const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRoutes')

const PORT = process.env.PORT ?? 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = () => {
  try {
    app.listen(PORT, async () => {
      await mongoose.connect(
        'mongodb+srv://admin:admin@cluster0.d1inyhm.mongodb.net/UlbiTV-auth-with-roles-nodeJS?retryWrites=true&w=majority&appName=Cluster0',
      )
      console.log(`server started on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
