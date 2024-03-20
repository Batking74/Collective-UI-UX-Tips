// Importing Modules/Packages
const { connection } = require('./database/database');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../server/schema/schema');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { origin: ['http://localhost:5173'] };

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}


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
}).on('error', (error) => {
    throw error;
})