const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  let msg = "No Chats Found";
  try {
    msg = fs.readFileSync("message.txt", { encoding: "utf-8" });
  } catch (err) {
    console.log(err);
  }
  console.log(msg);
  res.send(
    `${msg}<br>
    <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
    <input id="message" type="text" name="message">
    <input id="username" type="hidden" name="username">
    <button type="submit">Send</button>
    </form>`
  );
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  fs.appendFileSync("message.txt", `${req.body['username']} : ${req.body["message"]} `, (err) => {
    if (err) {
      console.log(err);
      res.redirect("/404");
    }
  });
  res.redirect("/");
});

module.exports = router;
