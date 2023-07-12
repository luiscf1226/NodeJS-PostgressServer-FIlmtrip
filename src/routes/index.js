const {Router} = require ('express');
const router = Router();
const {getUsers, getUsuarios,insertUsuarios,checkUsuario}=require('../controllers/index.controller')

router.get('/users',getUsers)
router.get('/usuarios',getUsuarios)
router.post('/insertUsuario',insertUsuarios)
router.post('/checkUsuario',checkUsuario)

module.exports = router;