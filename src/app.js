const epxress = require("express");

const app = epxress();

app.use("/", (req, res) => {
    res.send("Hello from the server!1")
})

app.use("/hello", (req, res) => {
    res.send("Hello from the hello!")
})

app.use("/test", (req, res) => {
    res.send("Hello from the test!")
})

app.listen(4000, () => {
    console.log("Server is successfully on port 3000....");

});