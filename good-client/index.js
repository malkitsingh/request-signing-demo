const crypto = require('crypto')
const express = require('express')
const app = express()
const port = 3001
const SECRET_KEY = 'ABC123DEF456'
const axios = require('axios');

app.get('/', async (req, res) => {
    const dataToSend = {
        "id": 1,
        "firstName": "Malkit"
    }
    const hash = crypto.createHmac('sha256', SECRET_KEY).update(JSON.stringify(dataToSend))
    const sig = hash.digest('hex');

    let resp = await axios.post("http://localhost:3000/", dataToSend, { headers: { "x-signature": sig } });
    console.log(resp.data);

    res.send("request sent!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})