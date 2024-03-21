// Importing Modules/Packages
const { connection } = require('./database/database');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const schema = require('./schema/schema');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { origin: ['http://localhost:5173', 'https://openchat-0ptg.onrender.com'] };

const server = new ApolloServer({ schema });


const startApolloServer = async () => {

    // Starting Apollo Server
    await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Creating API Route for Apollo Server
    app.use('/graphQL', cors(corsOptions), expressMiddleware(server));

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
}


startApolloServer();


