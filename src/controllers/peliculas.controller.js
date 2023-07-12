const {Pool}=require('pg');

const pool=new Pool({
    host:'containers-us-west-91.railway.app',
    user:'postgres',
    password:'hZiBIOiaDXOVKUJqoc80',
    database:'railway',
    port:'7623'
});

const getPeliculas= async (req,res)=>{
    const response= await pool.query('select * from Peliculas');
    res.json(response.rows)
}

const getPelicula = async (req, res) => {

    const { id } = req.params;

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM Peliculas WHERE idPelicula = ?'
            , [id])

        res.json(result)
    } catch (error) {
        res.status(400)
        res.send(error.message)
    }
}

const getPeliculaImagen = async (req, res) => {



    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT FotoUrl,idPelicula FROM Peliculas')

        res.json(result)
    } catch (error) {
        res.status(400)
        res.send(error.message)
    }
}

module.exports={
    getPeliculas,
    getPelicula,
    getPeliculaImagen
    
}