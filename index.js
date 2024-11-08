const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')

const port = process.env.PORT || 3000
require('dotenv').config()

// name: tranvutt112
// password: biXUhtO6PDOHIfRK

// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://book-app-frontend-mu.vercel.app'],
    credentials: true
}))

// routes
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require('./src/users/user.route')
const adminRoutes = require('./src/stats/admin.stats')
app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
        res.send('Hello developer!')
    })
}

main().then(() => console.log("Mongodb Conect Successfully")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})