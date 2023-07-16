const { Router } = require('express');
const router = Router();
const { getUsers, getUsuarios, insertUsuarios, checkUsuario } = require('../controllers/index.controller')
const { getPeliculas,
    getPelicula,
    getPeliculaImagen } = require('../controllers/peliculas.controller')

router.get('/users', getUsers)
router.get('/usuarios', getUsuarios)
router.post('/insertUsuario', insertUsuarios)
router.post('/checkUsuario', checkUsuario)


//pelicula
router.get('/getPeliculas', getPeliculas)
router.get('/getPelicula/:idPelicula', getPelicula)
router.get('/getPeliculaImagen', getPeliculaImagen)




module.exports = router;