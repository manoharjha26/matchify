const epxress = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = epxress();

app.use("/admin", adminAuth)

app.get("/user/data", userAuth, (req, res) => {
    res.send("User login Successfully")
})

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Send")
})

app.get("/admin/deleteUser", (req, res) => {
    res.send("Delete a User")
})



app.listen(3000, () => {
    console.log("Server is successfully on port 3000....");

});