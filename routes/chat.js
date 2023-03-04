const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) =>{
    let msg = 'No Chats Found';
    try{
        msg = fs.readFileSync('message.txt', {encoding: "utf-8"});
    }
    catch(err){
        console.log(err);
    }
    console.log(msg);
    res.send(`${msg}<br><form action="/" method="POST"><input id="message" type="text" name="message"><button type="submit">Send</button></form>`);
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    fs.appendFileSync('message.txt', req.body['message'], err => {
        if(err){
            console.log(err);
            res.redirect('/404');
        }
    });
    res.redirect('/');
    // console.log(localStorage.getItem('username'));
});

module.exports = router;