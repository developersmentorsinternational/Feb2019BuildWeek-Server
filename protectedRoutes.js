const express = require("express");
const router = express.Router();
const db = require("./dbFunctions");
const joi = require("joi");
const randomizer = require("randomatic");
const nodemailer = require("nodemailer");

router.get("/user", async (req, res) => {
    try {
      const user = await db.getUser(req.session.user);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: `Server error`, error: err });
    }
  });

router.get("/users", async (req, res) => {
try {
    const users = await db.getUsers();
    res.status(200).json(users);
} catch (err) {
    console.log(err);
    res.status(500).json({ message: `Server error`, error: err });
}
});

router.get("/logout",(req,res) => {
    if(req.session.user){
        req.session.destroy(err => {
            if(err){
                res.status(500).send("<h1>Error with logout request</h1>");
            } else {
                res.status(200).send("<h1>You have successfully logged out</h1>");
            }
        })
    } else {
        res.send("<h1>You are already logged out</h1>");
    }
  })


module.exports = router;