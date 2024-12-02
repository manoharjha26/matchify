const epxress = require("express");

const app = epxress();


app.get("/user", (req, res) => {
    res.send({
        firstname: "manohar",
        lastname: "jha"
    })
})

app.post("/user", (req, res) => {
    // Save Data to the Database
    res.send("Data Successfully saved to the database");
})

app.delete("/user", (req, res) => {
    res.send("Data Delete Successfully");
})

app.listen(3000, () => {
    console.log("Server is successfully on port 3000....");

});