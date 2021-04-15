import { Router} from 'express';
import { getPersona, postPersona } from '../controllers/persona';

// inicialización
const router = Router();

// endpoints
router.get('/', getPersona);
router.post('/', postPersona);


export default router;