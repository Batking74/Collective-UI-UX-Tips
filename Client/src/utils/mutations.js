// Importing Modules/Packages
import { gql } from '@apollo/client';

export const CREATE_POST = gql`
    mutation createPost($Name: String!, $Content: String!) {
        CreatePost(Username: $Name, Content: $Content) {
            id
            Username
            Content
        }
    }
`;

export const SAVE_FEEDBACK = gql`
    mutation addFeedback($Name: String!, $Message: String!) {
        SaveFeedback(Username: $Name, Message: $Message) {
            id
            Username
        }
    }
`;