const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const axios = require("axios");

// ============================
// Criar nova tarefa
// ============================
router.post("/", async (req, res) => {
  try {
    const { description, category } = req.body;

    if (!description || !category) {
      return res.status(400).json({ error: "Description and category are required" });
    }

    const task = new Task({ description, category });
    await task.save();

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================
// Listar todas as tarefas
// ============================
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================
// Deletar tarefa por ID
// ============================
router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================
// Buscar categorias da API externa (TheMealDB)
// ============================
router.get("/categories", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    const categories = response.data.categories.map((cat) => ({
      id: cat.idCategory,
      name: cat.strCategory,
    }));

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Error fetching categories" });
  }
});

module.exports = router;