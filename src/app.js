const epxress = require("express");

const app = epxress();

// app.use("/", (err, req, res, next) => {
//     if (err) {
//         res.status(500).send("Something went wrong")
//     }
// })

app.get("/getUserData", (req, res) => {
    // Logic of DB call and user data
    try {
        res.send("User Data Send")
        // throw new Error("ncxjhf");
    } catch (error) {
        res.status(500).send("Some Error Contact Support team.")
    }

})

app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong")
    }
})


app.listen(7777, () => {
    console.log("Server is successfully on port 7777....");

});