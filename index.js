const express =require("express");
const app= express();
const PORT=3001

app.use("/", (req, res) =>{
    res.send("Hello there");;
})

app.listen(PORT, () =>{
    console.log(`The server is running on port ${PORT}`);
}); 