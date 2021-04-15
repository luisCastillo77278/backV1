import { Sequelize } from 'sequelize';

const db = new Sequelize('prototipo','root','lcv77278',{
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;