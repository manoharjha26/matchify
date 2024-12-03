const epxress = require("express");

const app = epxress();


app.use("/user", (req, res, next) => {
    console.log("Handling the route user 1!")
    res.send("Response 1")
    next();
}, (req, res) => {
    console.log("Handling the route user 2!");
    res.send("Response 2")
})

app.listen(3000, () => {
    console.log("Server is successfully on port 3000....");

});