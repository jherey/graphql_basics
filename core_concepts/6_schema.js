/*
The GraphQL Schema
- defines capabilities of the API by specifying how a client can fetch and update data
- represents a contract between client and server
- collection of GraphQL types with special root types
*/

// Root Types - each API has some root types that define the entry point for the API
    type Query {
      ...
    }
    type Mutation {
      ...
    }
    type Subscription {
      ...
    }

//  The Query Type
    {
      allPersons {
        name
      }
    }

    type Query {
      allPersons(last: Int): [Person!]! // list of Persons
    }

//  The Mutation Type
    {
      mutation {
        createPerson(name: 'Bob', age: 36) {
          id
        }
      }
    }

    type Mutation {
      createPerson(name: String!, age: Int!): Person!
    }

//  The Subscription Type
    {
      subscription {
        newPerson {
          name
          age
        }
      }
    }

    type Subscription {
      newPerson: Person!
    }

// Full Schema
type Person {
  id: ID!
  name: String!
  age: Int!
  posts: [Post!]!
}
type Post {
  titlle: String!
  author: Person!
}


type Query {
  allPersons(last: Int): [Person!]!
  // adding new queries
  allPosts(last: Int) : [Post!]!
}
type Mutation {
  createPerson(name: String!, age: Int!): Person!
  // adding more mutations
  updatePerson(id: ID!, name: String!, age: Int!): Person!
  deletePerson(id: ID!): Person!
  createPost(title: String!): Post!
  updatePost(id: ID!, title: String!): Post!
  deletePost(id: ID!): Post!
}
type Subscription {
  newPerson: Person!
  // adding more subscriptions
  updatedPerson: Person!
  deletedPerson: Person!
  newPost: Person!
  updatedPost: Post!
  deletedPost: Post!
}
