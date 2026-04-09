const express = require ('express');
const jwt = require('jsonwebtoken');


async function generateToken(req, res){
    const secret_key = 'super_secret_key';
    const user = {
        id: 1,
        date: new Date(),
    }

const token = jwt.sign(user, secret_key, { expiresIn: '1h' });

res.json({ token });


}

module.exports = { generateToken }