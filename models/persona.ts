import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Persona = db.define('persona', {
    nombre: {
        type: DataTypes.STRING,
    },
    apellidoP: {
        type: DataTypes.STRING,
    },
    apellidoM: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    numReg: {
        type: DataTypes.STRING,
    }
});

export default Persona;