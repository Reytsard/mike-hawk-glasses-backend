import express from "express";
import fs from "fs"

const router = express.Router();

router.post("/shapes", async (req, res) => {
    try{
        const imagePath = req.file.path;
    }catch(error){
        console.log(error)
    }
});

router.get("/get", async (req, res)=> {
    return res.status(200).json({buh: "nice"});
})

export default router;