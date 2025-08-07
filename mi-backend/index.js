import express from 'express'
import serverless from 'serverless-http'

const app = express()
app.use(express.json())
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK!' })
})

export default serverless(app)