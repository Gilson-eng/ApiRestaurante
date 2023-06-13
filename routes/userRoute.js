const router = require('express').Router();
const userController = require('../controllers/userController');

router.get("/", userController.buscarTodos);
router.get("/:id", userController.buscarPorId);
router.post("/insert", userController.inserirUsuario);
router.post("/login", userController.loginUser);
router.put("/:id", userController.editarUsuario);
router.delete("/:id", userController.deletarUsuario)

module.exports = router;
