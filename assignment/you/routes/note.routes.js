const express = require("express");
const { NoteModel } = require("../model/note.model");

const noteRouter = express.Router();


noteRouter.get("/",async(req,res)=>{
    try {
        const note = await NoteModel.find();
        res.status(200).send(note)
    } catch (error) {
        res.status(400).send("error")
    }
})


noteRouter.post("/add",async(req,res)=>{
try {
    const note = new NoteModel(req.body);
      await note.save();
      res.status(200).send({"msg":"New note added"})
    } catch (error) {
    res.status(400).send({"msg":"Error in adding"})
    
}
})


noteRouter.patch("/update/:id",(req,res)=>{

})


noteRouter.delete("/delete/:id",(req,res)=>{

})


module.exports = {
    noteRouter
}