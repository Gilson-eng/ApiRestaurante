const db = require("../config/database");

module.exports = {
  buscarTodos: async () => {
    try {
      const produto = await db.select().table("TB_Product");

      if (!produto) {
        return null;
      }
      return produto;
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  buscarPorId: async (id)=>{
    try{
      const produto = await db.select().table("TB_Product").where("TB_Product.Id_Product", id);
      if(!produto){
        return null;
      }
      return produto;

    }catch(err){
      console.log(err);
      return null;
    }
  },

  inserirProduto: async(produto)=>{
    try{
      const resultado = await db.insert(produto).into("TB_Product");
      return resultado;
    }catch(err){
      console.log(err);
      return null;
    }
  },

  editarProduto: async(id, produto)=>{
    try{
      const resultado = await db.update(produto).table("TB_Product").where("TB_Product.Id_Product", id);
      return resultado;

    }catch(err){
      console.log(err);
      return null;
    }
  },

  deletarProduto: async (id)=>{
    try{
    const resultado = await db.select().table("TB_Product").where("TB_Product.Id_Product", id).del();
    return resultado;
    }catch(err){
      console.log(err);
      return null;
    }
  }
};
