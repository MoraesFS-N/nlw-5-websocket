import express  from "express";

const app = express();


app.get('/', (req, res) => {
    return res.json({
        message: 'Oi eu sou o Goku'
    });
});


app.post('/', (req, res) =>{
    return res.json({
        message: 'User saved sucessfully'
    });
});


app.listen(3333, () => {
    console.log("Server is running on port 3333");
});

