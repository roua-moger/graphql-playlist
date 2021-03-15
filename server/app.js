const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
//make user to replace my db string & cards with your own

app.use('/graphql',graphqlHTTP({
schema,
graphiql: true
}));

app.listen(4000, () =>{
    console.log('now listening for request on port 4000');
});