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

module.exports={
    getUsers
}