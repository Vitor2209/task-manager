const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware para JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Importar rotas
const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);

// Porta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});