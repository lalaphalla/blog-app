const express = require('express');
const bodyParser = require('body-parser')

const { randomBytes } = require('crypto')

const app = express();
app.use(bodyParser.json())

const posts = {}

app.get('/posts', (req, res)=>{
    res.send(posts);
})

app.post('/posts', (req, res)=>{
    const id = randomBytes(4).toString('hex');
    // pull id from body
    //req.body.title
    const {title} = req.body

    posts[id] = {
        id, title
    }

    // send back respond
    res.status(201).send(posts[id])

})

app.listen(4000, ()=>{
    console.log('Listen on 4000...');
})