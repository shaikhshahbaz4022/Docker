const express = require('express');
const app = express()

app.get("/", (req, res) => {
    res.send("Docker Image Home Route")
})
app.listen(3000, () => {
    console.log("Server is connected To Port:3000");
})