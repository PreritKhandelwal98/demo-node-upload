const mongoose = require('mongoose');

const express = require('express');
const app = express();
const connectDB = require('./db/config')

const PORT = process.env.PORT || 4100;

const products_routes =require('./routes/products')
app.get('/',(req,resp)=>{
    resp.send("hi i am  live and connected");
});

app.use("/api/products",products_routes);

const start = async ()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`${PORT} is now ready and connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

