const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
const apiRoutes = require('./routes/api');
app.use('/',apiRoutes);

//Database connection
mongoose.connect(process.env.MONGO_URI).then((e) => {
    console.log("Banco de dados acessado");
}).catch((e) => {
    console.log(`Erro ao acessar o banco de dados: ${e.error}`);
})

//start server
app.listen(PORT,()=> {
    console.log(`Server is running ${PORT}`);
    //console.clear()
});



