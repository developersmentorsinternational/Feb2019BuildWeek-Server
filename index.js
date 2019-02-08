const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require("./dbFunctions");
const bcrypt = require("bcryptjs");
const path = require('path');
const server = express();
const { authenticate,generateToken } = require('./auth/authenticate');
const protectedRoutes = require("./protectedRoutes");

server.use(helmet());
server.use(cors());
server.use(express.json());


server.get("/", async (req,res) => {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
})

// Maybe implement an automatic db call with the users info and necessary resources for the client
server.get("/regions", async (req,res) => {
  try{
    const regions = await db.getRegions();
    res.status(200).json(regions);
  }catch(err){
    res.status(500).json({ message: `Server error`, error: err });
  }
})

server.get("/resources", async (req, res) => {
  try {
    let resources = await db.getResources();
    res.status(200).json(resources);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Server error`, error: err });
  }
});

async function register(req, res) {
  let userInfo = req.body;
  const hash = bcrypt.hashSync(userInfo.password, 12);
  userInfo.password = hash;
  try {
    const response = await db.addMentor(userInfo);
    console.log(response)
    let user = await db.getMentor(userInfo);
    const token = generateToken(user);
    res.status(201).json({user,token});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

async function login(req, res) {
  const creds = req.body;
  try {
    let user = await db.getMentor(creds);
    if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        delete user.password
        res.status(200).json({ user,token });
    } else {
      res
        .status(401)
        .json({ message: `Username and/or password are incorrect` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Server error`, error: err });
  }
}

server.post('/register', register);
server.post('/login', login);


server.use('/api', authenticate ,protectedRoutes);


module.exports = {
  server
};

// server.post("/register", async (req, res) => {
//   const userInfo = req.body;
//   const hash = bcrypt.hashSync(userInfo.password, 12);
//   userInfo.password = hash;

//   try {
//     const newUser = await db.addMentor(userInfo);
//     req.session.user = newUser;
//     res.status(201).send(newUser);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// server.post("/login", async (req, res) => {
//   const creds = req.body;
//   try {
//     const user = await db.getMentor(creds);
//     if (user && bcrypt.compareSync(creds.password, user.password)) {
//       req.session.user = user;
//       res.status(200).json({ message: `Welcome ${user.firstName}` });
//     } else {
//       res
//         .status(401)
//         .json({ message: `Username and/or password are incorrect` });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: `Server error`, error: err });
//   }
// });

// const session = require("express-session");
// const sessionConfig = {
//   name: "UserCookie",
//   secret: process.env.JWT_SECRET,
//   cookie: {
//     maxAge: 1000 * 60 * 15,
//     secure: false,
//     httpOnly: false
//   },
//   resave: false,
//   saveUninitialized: false
// };
// server.use(session(sessionConfig));


