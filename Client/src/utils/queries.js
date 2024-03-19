import { gql } from '@apollo/client';

export const QUERY_ALL_POSTS = gql`
    query {
        QueryAllPosts {
        id
        Username
        Content
    }
}
`