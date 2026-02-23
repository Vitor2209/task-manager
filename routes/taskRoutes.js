const express = require("express")
const router = express.Router()
const Task = require("../models/task")
const axios = require("axios")

// CREATE TASK
router.post("/", async (req, res) => {
    try {
        const { description, category } = req.body

        const task = new Task({ description, category })
        await task.save()

        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// GET ALL TASKS
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// DELETE TASK
router.delete("/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.json({ message: "Task deleted" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// GET CATEGORIES FROM EXTERNAL API
router.get("/categories", async (req, res) => {
    try {
        const response = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        )

        const categories = response.data.categories.map(cat => cat.strCategory)

        res.json(categories)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router