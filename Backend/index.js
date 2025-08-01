import connectToMongo from './db.js';
import authRoutes from './routes/auth.js'
import notesRoutes from './routes/notes.js'
connectToMongo();
import cors from 'cors';
import express from 'express'
const app = express()
const port = 5000
 
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth', authRoutes)
app.use('/api/notes', notesRoutes)
app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})