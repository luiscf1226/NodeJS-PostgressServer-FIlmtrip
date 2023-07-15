const { Pool } = require('pg');

const pool = new Pool({
    host: 'containers-us-west-91.railway.app',
    user: 'postgres',
    password: 'hZiBIOiaDXOVKUJqoc80',
    database: 'railway',
    port: '7623'
});

const getPeliculas = async (req, res) => {
    try {
        const response = await pool.query('select * from "Peliculas"');
        const rows = response.rows; // Obtain the rows from the result

        res.json(rows);

    } catch (error) {
        res.status(400)
        res.send(error.message)
        console.log(error.message)
    }

}

const getPelicula = async (req, res) => {

    const { idPelicula } = req.params;

    try {
        const result = await pool.query(
            'SELECT "Nombre","Duracion","Rango","Genero","Descripcion","Horarios","FotoUrl" FROM "Peliculas" WHERE "idPelicula" = $1',
            [idPelicula]
        );
        res.json(result.rows);
    } catch (error) {
        res.status(400);
        res.send(error.message);
        console.log("error en get pelicula: " + error.message);
    }
}

const getPeliculaImagen = async (req, res) => {



    try {

        const result = await pool.query('SELECT "FotoUrl","idPelicula" FROM "Peliculas"')

        const rows = result.rows; // Obtain the rows from the result

        res.json(rows);
    } catch (error) {
        res.status(400)
        res.send(error.message)
        console.log(error.message);
    }
}

module.exports = {
    getPeliculas,
    getPelicula,
    getPeliculaImagen

}