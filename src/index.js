import peliculasRoutes from "./routes/peliculas.route.js";
const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/peliculas",peliculasRoutes);
//
app.listen(process.env.PORT || 3000);
console.log('Server on port 3000');