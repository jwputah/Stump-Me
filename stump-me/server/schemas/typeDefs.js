const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int    
    friends: [User]
    comments: [Comment]
  }

   type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
  }
`;

module.exports = typeDefs;



// RIDDLES?
//   type Thought {
//     _id: ID
//     thoughtText: String
//     createdAt: String
//     username: String
//     reactionCount: Int
//     reactions: [Reaction]
//   }
// addThought(thoughtText: String!): Thought
// addReaction(thoughtId: ID!, reactionBody: String!): Thought
// addFriend(friendId: ID!): User

// thoughts(username: String): [Thought]
//     thought(_id: ID!): Thought
