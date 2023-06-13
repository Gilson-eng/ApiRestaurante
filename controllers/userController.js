const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

module.exports = {
  buscarTodos: async (req, res) => {
    try {
      const user = await userModel.buscarTodos();
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
      const user = await userModel.buscarPorId(id);
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
    
      const user = {
        Id_User: req.body.Id_User,
        Cpf: req.body.Cpf,
        Password: req.body.Password,  //bcrypt.hashSync()
        Name: req.body.Name,
        Street: req.body.Street,
        Number: req.body.Number,
        District: req.body.District,
        City: req.body.City,
        State: req.body.State,
      };
      const resultado = await userModel.inserirUser(user);
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
      const resultado = await userModel.editarUser(id, user);
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
      resultado = await userModel.deletarUser(id);
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

  loginUser: async (req, res) => {
    const selectedUser = ({Cpf: req.body.cpf, Password: req.body.password})
    const resultado = await userModel.loginUser(selectedUser);   
    try {
      if (resultado.length==0) {        
        return res
          .status(400)
          .json({ sucesso: false, mensagem: "Erro ao encontrar usuário!"});          
      }
      
      return res
        .status(200)
        .json(resultado);
        
    } catch (err) {
      console.log(err);
      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },
};
