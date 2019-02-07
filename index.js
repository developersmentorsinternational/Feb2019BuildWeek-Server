const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require("bcryptjs");
const db = require("./dbFunctions");
const session = require("express-session");
const protectedRoutes = require("./protectedRoutes");
const path = require('path');

const sessionConfig = {
  name: "UserCookie",
  secret: process.env.JWT_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 15,
    secure: false
  },
  httpOnly: false, 
  resave: false,
  saveUninitialized: false
};

function protected(req,res,next){
  if(req.session && req.session.user){
    
      next()
  } else {
      res.status(401).json({message:"Not Authorized or Not Logged in"})
  }
};

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.get("/", async (req,res) => {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
})

server.post("/register", async (req, res) => {
  const userInfo = req.body;
  const hash = bcrypt.hashSync(userInfo.password, 12);
  userInfo.password = hash;

  try {
    const newUser = await db.addMentor(userInfo);
    req.session.user = newUser;
    res.status(201).send(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

server.post("/login", async (req, res) => {
  const creds = req.body;
  try {
    const user = await db.getMentor(creds);
    if (user && bcrypt.compareSync(creds.password, user.password)) {
      req.session.user = user;
      res.status(200).json({ message: `Welcome ${user.firstName}` });
    } else {
      res
        .status(401)
        .json({ message: `Username and/or password are incorrect` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Server error`, error: err });
  }
});

server.get("/regions", async (req,res) => {
  try{
    const regions = await db.getRegions();
    res.status(200).json(regions);
  }catch(err){
    res.status(500).json({ message: `Server error`, error: err });
  }
})

server.use("/api" , protected, protectedRoutes)

module.exports = {
  server
};

