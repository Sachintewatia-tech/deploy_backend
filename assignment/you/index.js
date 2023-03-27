const express = require("express");
const { connect } = require("./db");
const { auth } = require("./routes/auth.middleware");
const { noteRouter } = require("./routes/note.routes");
const { userRouter } = require("./routes/user.routes");
const app = express();
app.use(express.json());
require("dotenv").config();

app.get("/",(req,res)=>{
    res.send("HOME PAGE");
})

app.use("/users",userRouter);
app.use(auth);
app.use("/notes",noteRouter);

app.listen(process.env.port,async()=>{
    try {
        await connect
        console.log("connected to db");
    } catch (error) {
        console.log(error);
        console.log("error in connected to db");
    }
    console.log(`running on ${process.env.port} port`);
})