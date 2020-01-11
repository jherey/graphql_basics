const { GraphQLServer } = require('graphql-yoga');

// defines your GraphQL schema
const typeDefs = `
  type Query {
    info: String!
  }
`

// the actual implementation of the GraphQL schema
const resolvers = {
  Query: {
    info: () =>  `This is the API of a Hackernews Clone`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`));
