// Importing Modules/Packages
const corsOptions = { origin: ['http://localhost:3000', 'https://openchat-0ptg.onrender.com'] };
const { expressMiddleware } = require('@apollo/server/express4');
const { connection } = require('./database/database');
const { ApolloServer } = require('@apollo/server');
const schema = require('./schema/schema');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Creating an instance of ApolloServer for testing queries and mutations
const server = new ApolloServer({ schema });

const startApolloServerAndApp = async () => {

    // Starting Apollo Server
    await server.start();

    // Middleware
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

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
        });
    })
    .on('error', (error) => {
        console.error(`Server Error: ${error}`);
        throw error;
    });
}

// Starts Application
startApolloServerAndApp();