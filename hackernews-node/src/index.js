const { GraphQLServer } = require('graphql-yoga');

let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }
];

// the actual implementation of the GraphQL schema
let idCount = links.length;
const resolvers = {
  Query: {
    info: () =>  `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (parent, args) => {
      const { id } = args;
      const link = links.find(link => link.id === id);
      return link ? link : null;
    }
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      const { id, description, url } = args;
      let link = links.find(link => link.id === id);
      if (!link) return null;
      link.url = url || link.url;
      link.description = description || link.description;
      return link;
    },
    deleteLink: (parent, args) => {
      const { id } = args;
      const linkToDeleteIndex = links.findIndex(link => link.id === id);
      const link = links[linkToDeleteIndex];
      if (linkToDeleteIndex === -1) return null;
      links.splice(linkToDeleteIndex, 1);
      return link;
    }
  },
  // Removing the Link resolves because the GraphQL server infers what they look like
  // Link: {
  //   id: (parent) => parent.id,
  //   description: (parent) => parent.description,
  //   url: (parent) => parent.url,
  // }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`));
