import { Router } from "express";
import { lista, deletar } from "../controllers/materials.js";
import { authenticate, requireRole } from "../middlewares/auth.js"

const routermaterials = Router()

routermaterials.use(authenticate)

routermaterials.get("/listar", lista)

// Somente admin pode deletar
routermaterials.delete("/:id", requireRole("admin", deletar))

export default routermaterials