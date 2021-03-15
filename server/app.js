const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
//make user to replace my db string & cards with your own
mongoose.connect('mongodb+srv://user:1234@cluster0.siu05.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    console.log('conncted to database')
});

app.use('/graphql',graphqlHTTP({
schema,
graphiql: true
}));

app.listen(4000, () =>{
    console.log('now listening for request on port 4000');
});