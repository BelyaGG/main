const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/reg', (req, res) => {
    let newUser = new User({
        login: req.body.login,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        access: req.body.access
    })

    User.addUser(newUser, (err, user)=>{
        if(err)
            res.json({msg:"error"})
        else
            res.json({msg:"add user"})
    })
});

module.exports = router;
