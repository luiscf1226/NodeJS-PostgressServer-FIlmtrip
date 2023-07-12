

const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/index'));

//
app.listen(process.env.PORT || 3000);
console.log('Server on port 3000');