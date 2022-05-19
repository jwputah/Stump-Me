const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int    
    friends: [User]
  }

   type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
   
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
