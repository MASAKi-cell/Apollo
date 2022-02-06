const express = require("express");
const expressHTML = require('express-graphql');
const app = express();

app.use('/graphql',expressHTML);

app.listen(4000,()=>{
    console.log('🚀 listen port 4000');
})