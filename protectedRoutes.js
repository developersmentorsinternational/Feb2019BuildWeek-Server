const express = require("express");
const router = express.Router();
const db = require("./dbFunctions");
const moment = require("moment");
const joi = require("joi");
const randomizer = require("randomatic");
const nodemailer = require("nodemailer");

router.get("/user", async (req, res) => {
    try {
      let user = await db.getMentor(req.session.user);
      delete user.password
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: `Server error`, error: err });
    }
  });

router.get("/users", async (req, res) => {
try {
    const users = await db.getMentors();
    res.status(200).json(users);
} catch (err) {
    console.log(err.message);
    res.status(500).json({ message: `Server error`, error: err });
}
});

// Maybe have some control flow that can use the sender ID or email and the recipient ID or email
router.post("/message", async (req, res) => {
    req.body.sender = req.session.user.id
    // req.body.timeReceived = moment().format('YYYY/MM/D hh:mm:ss SSS')
    req.body.timeReceived = moment().format('YYYY/MM/D')
    console.log(req.body)
    try {
        const message = await db.submitMessage(req.body);
        res.status(200).json(message);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: `Server error`, error: err });
    }
    });

//{ [Error: SQLITE_ERROR: table usersmessages has no column named message] errno: 1, code: 'SQLITE_ERROR' }

router.get("/get-messages", async (req, res) => {
    const senderID = req.session.user.id
    console.log(senderID)
    try {
        const messages = await db.getOwnMessages(senderID);
        res.status(200).json(messages);
    } catch (err) {
        console.log(err.message);
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