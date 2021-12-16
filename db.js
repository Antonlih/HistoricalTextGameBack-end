const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
//module.exports = new Sequelize(
//    process.env.DB_NAME,
  //  process.env.DB_USER,
  //  process.env.DB_PASSWORD,
 //   process.env.DB_URL,
//    {
    //    dialect: 'postgres',
      //  dialectOptions: {
  //          "ssl": true
//        },
      //  host: process.env.DB_HOST,
    //    port: process.env.DB_PORT
  //  }
//)

module.exports = sequelize