const router = require('express').Router();
const produtoController = require("../controllers/produtoController");

router.get("/", produtoController.buscarTodos);
router.get("/:id", produtoController.buscarPorId);
router.post("/", produtoController.inserirProduto);
router.put("/:id", produtoController.editarProduto);
router.delete("/:id", produtoController.deletarProduto);


module.exports = router;