require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const taskRoutes = require("./routes/taskRoutes")

const app = express()
app.use(express.json())

app.use("/tasks", taskRoutes)

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB connected")
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`)
    })
})
.catch((err) => {
    console.error("❌ MongoDB connection error:", err.message)
})