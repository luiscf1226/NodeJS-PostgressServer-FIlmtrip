import {Router} from "express";
import { methods as peliculasController} from "../controllers/peliculas.controller.js";
const router = Router();

router.get('/getPeliculas', peliculasController.getPeliculas);
router.get('/getPelicula', peliculasController.getPelicula);
router.get('/getPeliculaImagen', peliculasController.getPeliculaImagen);

export default router;