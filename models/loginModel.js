const db = require("../config/database");

module.exports = {
  buscarTodos: async () => {
    try {
      const users = await db.select().table("TB_User");
      if (!users) {
        return null;
      }
      return users;
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  buscarPorId: async (id)=>{
    try{
        const user = await db.select().table("TB_User").where("TB_User.Id_User", id)
        if(!user){
            return null;
        }
        return user;
    } catch(err){
        console.log(err);
        return null;
    }
  },

  inserirUser: async (user)=>{
    try{
        const resultado = await db.insert(user).into("TB_User");
        return resultado
    }catch(err){
        console.log(err);
        return null;
    }
  },

  editarUser: async (id, user)=>{
    try{    
    const resultado = await db.update(user).table("TB_User").where("TB_User.Id_User",id);
    return resultado;
  }catch(err){
    console.log(err);
    return null;
  }},

  deletarUser: async (id)=>{
    try{
    const resultado = await db.select().table("TB_User").where("TB_User.Id_User",id).del();
    return resultado;
    }catch(err){
        console.log(err);
        return null;
    }    
  }
};
