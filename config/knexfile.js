const conn = {
    client: "mysql2",
    connection:{
        database: "Restaurante",
        user:"root",
        password:"root",
        host:"localhost",
        port: 3306,
        timezone:"+03:00"
    },
    
        pool:{
            min: 2,
            max:10,
        },

        migrations:{
            tableName:"knex_migrations",
            directory:"migrations",
        }    
};

module.exports = conn;


