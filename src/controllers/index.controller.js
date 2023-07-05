const {Pool}=require('pg');

const pool=new Pool({
    host:'localhost',
    user:'postgres',
    password:'luis123',
    database:'filmtrip',
    port:'5432'
});

const getUsers= async (req,res)=>{
    const response= await pool.query('select * from users');
    res.json(response.rows)
}

module.exports={
    getUsers
}