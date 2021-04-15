"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('persona', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellidoP: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellidoM: {
        type: sequelize_1.DataTypes.STRING,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
    },
    numReg: {
        type: sequelize_1.DataTypes.STRING,
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map