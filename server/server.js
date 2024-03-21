// Importing Modules/Packages
const { connection } = require('./database/database');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { origin: ['http://localhost:5173', 'https://openchat-0ptg.onrender.com'] };


// Creating a route for GraphQL API
app.use('/graphQL', cors(corsOptions), graphqlHTTP({
    schema,
    graphiql: true
}));


// Starting Server
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}!`);
    // Listening for Database open
    connection.once('open', () => {
        console.log('Database connected successfully!');
    })
    .on('error', (error) => {
        console.error(`Database Connection Error: ${error}`);
        throw error;
    })
})
.on('error', (error) => {
    console.error(`Server Error: ${error}`);
    throw error;
})