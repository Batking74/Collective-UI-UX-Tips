// Importing Modules/Packages
const { graphqlHTTP } = require('express-graphql');
const { connection } = require('./database/database');
const schema = require('./schema/schema');
const express = require('express');
const app = express();
const PORT = 5000;


// Creating a route for GraphQL API
app.use('/graphQL', graphqlHTTP({
    schema,
    graphiql: true
}));


// Listening for Database open
connection.once('open', () => {
    // Starting Server
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}!`);
    })
    console.log('Database connected successfully!');
})
.on('error', (error) => {
    throw error;
})