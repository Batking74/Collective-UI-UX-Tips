// Importing Modules/Packages
const feedback = require('./models/Feedback');
const Post = require('./models/Post');
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


// Describing Query Options for when I make queries
const FeedbackType = new GraphQLObjectType({
    name: 'Feedback',
    fields: () => ({
        id: { type: GraphQLID },
        Username: { type: GraphQLString },
        Message: { type: GraphQLString }
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLID },
        Username: { type: GraphQLString },
        Content: { type: GraphQLString }
    })
});


// Getters for retriving data
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        QueryAllPosts: {
            type: new GraphQLList(PostType),
            async resolve() {
                // Retrives all Posts from the Database, and sends to client
                try {
                    return await Post.find();
                }
                catch(error) {
                    logError(error, 'QueryAllPosts', 'query');
                }
            }
        },
        QueryAllFeedback: {
            type: new GraphQLList(FeedbackType),
            async resolve() {
                // Retrives all Feedback from the Database, and sends to client
                try {
                    return await feedback.find();
                }
                catch(error) {
                    logError(error, 'QueryAllFeedback', 'query');
                }
            }
        }
    }
})


// Setters for altering and creating data
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        CreatePost: {
            type: PostType,
            args: {
                Username: { type: GraphQLString },
                Content: { type: GraphQLString }
            },
            async resolve(parent, { Username, Content }) {
                // Creates a new Post in MongoDB
                try {
                    // Sanitizing Data
                    if(Username && Content) {
                        return await Post.create({ Username, Content });
                    }
                }
                catch(error) {
                    logError(error, 'CreatePost', 'mutation');
                }
            }
        },
        SaveFeedback: {
            type: FeedbackType,
            args: {
                Username: { type: GraphQLString },
                Message: { type: GraphQLString }
            },
            async resolve(parent, { Message, Username }) {
                console.log(Message)
                console.log(Username)
                // Saves users feedback to MongoDB
                try {
                    // Data Sanitation
                    if(!Username) Username = 'Anonymous';
                    if(Message) {
                        return await feedback.create({ Username, Message });
                    }
                }
                catch(error) {
                    logError(error, 'SaveFeedback', 'mutation');
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