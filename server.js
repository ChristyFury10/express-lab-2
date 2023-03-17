const express = require("express");

const app = express();

const PORT = 3000;

app.get("/greeting/:name", (req, res) =>{
    const name = req.params.name
    res.send("Hello there " + name)
})

app.listen(PORT, ()=>{
    console.log("listening on port 3000")
} );

