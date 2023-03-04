const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/success" method="POST"><input id="username" type="text" name="username"><button type="submit">Login</button></form>`)
});

router.post('/success', (req, res, next) => {
    console.log(req.body['username']);
    res.redirect('/');
})

module.exports = router;