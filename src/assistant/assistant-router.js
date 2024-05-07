import { Router } from "express";
import assistantController from "./assistant-controller.js";
const router = Router();

/**
 * @swagger
 * /api/assistant:
 *  post:
 *      summary: Cria um novo assistente.
 *      responses:
 *          201:
 *              description: Assistente criado com sucesso.
 *          401:
 *              description: Erro ao criar um assistente.
 */
router.post("/", assistantController.create);

/**
 * @swagger
 * /api/assistant:
 *  get:
 *      summary: Busca uma lista de assistentes.
 *      responses:
 *          201:
 *              description: Assistentes recuperados com sucesso.
 *          401:
 *              description: Erro ao recuperar assistentes.
 */
router.get("/", assistantController.getAll);

/**
 * @swagger
 * /api/assistant/{id}:
 *  delete:
 *      summary: Deleta um assistente.
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            description: Id do assistente
 *      responses:
 *          201:
 *              description: Assistente removido com sucesso.
 *          404:
 *              description: Parâmetro não encontrado.
 *          401:
 *              description: Erro ao remover assistentes.
 */
router.delete("/:id", assistantController.remove);

export default router;
