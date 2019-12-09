import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {adminRoutes, userRoutes} from './routes'

const app = express()

app.use(cors());
dotenv.config()

app.get("/home", (req, res) => {
    res.send('Done!')
})
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/user', userRoutes)

export default app