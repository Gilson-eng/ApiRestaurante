const loginModel = require("../models/loginModel");

module.exports = {
  buscarTodos: async (req, res) => {
    try {
      const user = await loginModel.buscarTodos();
      if (!user) {
        return res.status(404).json({
          sucesso: false,
          mensagem: "Erro ao buscar os usuários!",
        });
      }
      return res.status(200).json({
        sucesso: true,
        mensagem: "Usuários buscados com êxito!",
        objeto: user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        sucesso: false,
        mensagem: "Erro!",
      });
    }
  },

  buscarPorId: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await loginModel.buscarPorId(id);
      if (!user) {
        return res
          .status(404)
          .json({ sucesso: false, mensagem: "Erro ao buscar usuários!" });
      }
      return res.status(200).json({
        sucess: true,
        mensagem: "Usuário buscado com êxito!",
        objeto: user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },
  inserirUsuario: async (req, res) => {
    try {
      const user = req.body;
      const resultado = await loginModel.inserirUser(user);
      if (!resultado) {
        return res
          .status(404)
          .json({ sucesso: false, mensagem: "Erro ao inserir usuário!" });
      }
      return res
        .status(200)
        .json({ sucesso: true, mensagem: "Usuário inserido com sucesso!" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },

  editarUsuario: async (req, res) => {
    try {
      const id = req.params.id;
      const user = req.body;
      const resultado = await loginModel.editarUser(id, user);
      if (!resultado) {
        return res
          .status(404)
          .json({ sucesso: false, mensagem: "Erro ao editar o usuário!" });
      }
      return res
        .status(200)
        .json({ sucesso: true, mensagem: "Usuário editado com êxito!" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },
  deletarUsuario: async (req, res) => {
    try {
      const id = req.params.id;
      resultado = await loginModel.deletarUser(id);
      if (!resultado) {
        return res
          .status(404)
          .json({ sucesso: false, mensagem: "Erro ao excluir o usuário" });
      }
      return res
        .status(200)
        .json({ sucesso: true, mensagem: "Usuário deletado com sucesso!" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },
};
