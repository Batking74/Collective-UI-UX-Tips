// Importing Modules/Packages
const User = require('../models/User');
const Post = require('../models/Post');
const {
    GraphQLSchema,
    GraphQLList,
    GraphQLString,
    GraphQLObjectType,
    GraphQLID
} = require('graphql');


// Function for displaying error messages
const logError = ({ message }, queryName, queryType) => {
    console.error(`Error occurred in ${queryName} ${queryType}! - ${message}`);
    throw error;
}


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        Username: { type: GraphQLString },
        Email: { type: GraphQLString },
        Password: { type: GraphQLString },
        Posts: { type: new GraphQLList(PostType) }
    })
});


const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLID },
        User: { type: GraphQLString },
        Content: { type: GraphQLString }
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ReadUsers: {
            type: new GraphQLList(UserType),
            async resolve(parent, args) {
                // Will return all Users in database
                try {
                    return await User.find();
                }
                catch(error) {
                    logError(error, 'ReadUsers', 'query');
                }
            }
        },
        ReadUser: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            async resolve(parent, { id }) {
                // Will return Specific User in database
                try {
                    return await User.findById(id);
                }
                catch(error) {
                    logError(error, 'ReadUser', 'query');
                }
            }
        },
        ReadAllUsersPosts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                // Will display all users posts in database
            }
        },
        ReadUserPosts: {
            type: new GraphQLList(PostType),
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                // Will didplay a list of all a specific users posts
            }
        },
        ReadUserPost: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                // Will displays a specific users post
            }
        }
    }
})


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        CreateUser: {
            type: UserType,
            args: {
                Username: { type: GraphQLString },
                Email: { type: GraphQLString },
                Password: { type: GraphQLString }
            },
            async resolve(parent, { Username, Email, Password }) {
                // Creates a new User
                try {
                    return await User.create({ Username, Email, Password });
                }
                catch(error) {
                    logError(error, 'CreateUser', 'mutation');
                }
            }
        }
    }
})


// Exporting Module
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})