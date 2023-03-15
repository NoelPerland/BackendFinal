const express = require("express");
const server = express();
const cors = require("cors");
const { users } = require("../database");

server.use(express.json());
server.use(cors());

server.post("/register", (req, res) => {
  req.body.friends = [];
  users.push(req.body);
  res.status(201).send("Added user");
});

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const foundUser = users.find(
    (currentUser) =>
      currentUser.password === password && currentUser.username === username
  );

  if (foundUser) {
    res.status(200).send("Welcome " + username + "!");
    return;
  }
  res.status(401).send("Invalid username or password, please try again");
});

server.get("/friends", (req, res) => {
  const { username } = req.query;

  const foundUser = users.find(
    (currentUser) => currentUser.username === username
  );
  if ("!foundUser") {
    res.status(404).send("Didnt find any user that that username");
    return;
  }
  res.status(200).json(foundUser.friends);
});

server.listen(5050);
