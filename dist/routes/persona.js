"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = require("../controllers/persona");
// inicialización
const router = express_1.Router();
// endpoints
router.get('/', persona_1.getPersona);
router.post('/', persona_1.postPersona);
exports.default = router;
//# sourceMappingURL=persona.js.map