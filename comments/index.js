const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser);

const commentByPostId = {}

app.get('/posts/:id/comments', (req, res)=>{
    res.send(commentByPostId[req.body.params] || [])
})

app.post('/posts/:id/comments', (req, res)=>{
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentByPostId[req.params.id] || []
    comments.push({id: commentId, content })
    commentByPostId[req.params.id] = comments

    res.status(201).send(commentByPostId);
})


app.listen(4001, ()=>{
    console.log('Listen port 4001...');
})

