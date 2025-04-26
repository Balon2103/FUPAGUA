const express = require("express");
const { protect } = require("../middleware/authMiddleware"); // Middleware de autenticación
const {
  getPrincipalData,
  getDocumentosData, // Asegúrate de importar el controlador correcto
} = require("../controllers/principalController");

const router = express.Router();

// Ruta para obtener datos principales
router.get("/", protect, getPrincipalData);

// Nueva ruta para obtener documentos y registrar el historial de acces

module.exports = router;
