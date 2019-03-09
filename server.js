const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = require('./config/keys').mongoURI

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')


// Connect to DB
mongoose.connect(db)
.then(()=> console.log('mongodb connected'))
.catch(err => console.log(err));


//Lets write our first route

app.get('/', (req, res)=> res.send('Hello!'));

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);


const port = process.env.PORT || 5200;
app.listen(port, () => console.log(`Server running on ${port}`));
