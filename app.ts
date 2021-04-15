import dotenv from 'dotenv';
import Server from './models/server';

// configuracion dotenv para las variables de entorno
dotenv.config();

const server = new Server();
server.listen();