const router = require('express').Router();
const loginController = require('../controllers/loginController');

router.get("/", loginController.buscarTodos);
router.get("/:id", loginController.buscarPorId);
router.post("/", loginController.inserirUsuario);
router.put("/:id", loginController.editarUsuario);
router.delete("/:id", loginController.deletarUsuario)

module.exports = router;
