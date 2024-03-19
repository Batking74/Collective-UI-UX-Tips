// Importing Modules/Packages
const { connection } = require('./database/database');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const corsOptions = { origin: ['http://localhost:5173'] };


// Creating a route for GraphQL API
app.use('/graphQL', cors(corsOptions), graphqlHTTP({
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