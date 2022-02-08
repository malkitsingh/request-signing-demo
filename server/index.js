const crypto = require('crypto')
const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
const SECRET_KEY = 'ABC123DEF456'

app.post('/', (req, res) => {
    if(req.headers && req.headers['x-signature']){
        const hash = crypto.createHmac('sha256',SECRET_KEY).update(JSON.stringify(req.body))
        if(hash.digest('hex') == req.headers['x-signature'])
            return res.json({ "success": true })
        res.sendStatus(400)    
    }
    else{
        res.sendStatus(400)    
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})