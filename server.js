const express = require("express");

const app = express();

const PORT = 3000;

app.get("/greeting/:name", (req, res) =>{
    const name = req.params.name
    res.send("Hello there " + name)
})

app.get("/tip/:total/:percentage", (req, res) =>{
    const total = req.params.total
    const tipPercent =  req.params.percentage/100
    const tipAmount = total * tipPercent

    res.send("your tip amount is $" + tipAmount)
})

app.get("/magic/:question", (req, res) =>{
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const answer = Math.floor(Math.random() * 20) + 1;
    console.log(answer)
    res.send("<h1>responses[answer]</h1>")
})

// listening...
app.listen(PORT, ()=>{
    console.log("listening on port 3000")
} );

// app.get("/", (req, res) =>{
    
//     res.send()
// })