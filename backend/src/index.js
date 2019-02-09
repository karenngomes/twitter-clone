const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds129045.mlab.com:29045/twitter-clone-backend", {
    useNewUrlParser: true,
})

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})