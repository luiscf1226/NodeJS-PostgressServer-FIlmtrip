const {Pool}=require('pg');

const pool=new Pool({
    host:'containers-us-west-91.railway.app',
    user:'postgres',
    password:'hZiBIOiaDXOVKUJqoc80',
    database:'railway',
    port:'7623'
});

const getUsers= async (req,res)=>{
    const response= await pool.query('select * from users');
    res.json(response.rows)
}
const getUsuarios= async (req,res)=>{
    const response= await pool.query('select * from usuarios');
    res.json(response.rows)
}
const insertUsuarios = async (req, res) => {
    const { Nombre, Apellido, Correo, Password, Password2 } = req.body;
  
    try {
      // Perform the INSERT operation
      await pool.query(
        'INSERT INTO "usuarios"("nombre", "apellido", "correo", "password", "password2") VALUES ($1, $2, $3, $4, $5)',
        [Nombre, Apellido, Correo, Password, Password2]
      );
  
      res.status(200).json({ message: 'Data inserted successfully' });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'An error occurred while inserting data' });
    }
  };
  
  const checkUsuario = async (req, res) => {
    const { Correo, Password } = req.body;
  
    try {
      // Perform the SELECT operation
      const result = await pool.query(
        'SELECT * FROM "usuarios" WHERE "correo" = $1 AND "password" = $2',
        [Correo, Password]
      );
  
      if (result.rowCount === 1) {
        // User authentication successful
        res.status(200).json({ message: 'Authentication successful' });
      } else {
        // User authentication failed
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error checking user:', error);
      res.status(500).json({ error: 'An error occurred while checking user' });
    }
  };
  
module.exports={
    getUsers,
    getUsuarios,
    insertUsuarios,
    checkUsuario
}