import { Response, Request } from 'express';
import Persona from '../models/persona';

export const getPersona = async ( req: Request, res: Response) =>{

    const persona =  await Persona.findAll({
    })

    res.json({
        persona
    });

}

// a qui hay que meter lo demas de la tablas si es que es persona
// juridica
export const postPersona = async (req: Request, res: Response) =>{
    const { body } = req;


    try {
        
        const usuario = new Persona(body);
        await usuario.save();
        res.json( usuario );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con administrador al parecer hubo un problema'
        })
    }
}