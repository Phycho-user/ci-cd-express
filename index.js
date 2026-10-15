const express =require("express");
const app= express();
const PORT=3001

app.use("/", (req, res) =>{
    res.send("Hello there");;
})

app.use("/app", (req, res) =>{
    res.send("WelCome To this page :)");;
})

app.listen(PORT, () =>{
    console.log(`The server is running on port ${PORT}`);
}); 