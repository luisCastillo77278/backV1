
import express, { Application } from 'express';
import userRoutes from '../routes/persona';
import cors from 'cors';
import db from '../db/connection';

class Server{

    private app: Application;
    private port: string;
    private apiPath = {
        usuarios: '/api/personas'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT  || '8000';

        // conexion db
        this.dbConnection();

        // middlewares
        this.middlewares();

        // definiendo las rutas
        this.router();
    }


    async dbConnection(){
        try {
            await db.authenticate();
            console.log('database online');
        } catch (error) {
            throw new Error( error );
        }
    }

    middlewares(){
        // cors
        this.app.use( cors() );

        // lectura body json
        this.app.use( express.json() );

        // carpeta publica
        this.app.use( express.static('public') );
    }

    router(){
        this.app.use(this.apiPath.usuarios, userRoutes);
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor a la escucha en el puerto:  '+this.port);
        });
    }

}

export default Server;