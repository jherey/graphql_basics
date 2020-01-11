# GraphQL

My GraphQL level up resource

## Getting started
Every GraphQL schema has three special root types, these are called `Query`, `Mutation` and `Subscription`
The fields on these root types are called `root field` and define the available API operations.

- typeDefs: These are the type definitions from your application schema.
- resolvers: This is a JavaScript object that mirrors the Query, Mutation and Subscription types and their fields from your application schema. Each              field in the application schema is represented by a function with the same name in that object.
- context: This is an object that gets passed through the resolver chain and every resolver can read from or write to.


When the type of a root field is an object type, you can further expand the query (or mutation/subscription) with fields of that object type. The expanded part is called `selection set`.

Let’s now consider a slightly more advanced example:

```
type Query {
  users: [User!]!
  user(id: ID!): User
}

type Mutation {
  createUser(name: String!): User!
}

type User {
  id: ID!
  name: String!
}
```
A few things to note
```
For the fields in the selection set, it doesn’t matter whether the type of the root field is required or a list. In the examples schema above, the three root fields all have different type modifiers (i.e. different combinations of being a list and/or required) for the User type:

- For the users field, the return type [User!]! means it returns a list (which itself can not be null) of User elements. The list can also not contain elements that are null. So, you’re always guaranteed to either receive an empty list or a list that only contains non-null User objects.
- For the user(id: ID!) field, the return type User means the returned value could be null or a User object.
- For the createUser(name: String!) field, the return type User! means this operation always returns a User object.
```

## Creating a simple query
#### Extending the schema definition
In general, when adding a new feature to the API, the process will look pretty similar every time:

1. Extend the GraphQL schema definition with a new root field (and new data types, if needed)
2. Implement corresponding resolver functions for the added fields

This process is also referred to as schema-driven or schema-first development.

#### The query resolution process
Every field inside the schema definition is backed by one resolver function whose responsibility it is to return the data for precisely that field.
Consider again the query from above:
```
query {
  feed {
    id
    url
    description
  }
}
```
A resolver function will be invoked for `feed`, `id`, `url` and `description`.

The first argument, commonly called `parent` (or sometimes `root`) is the result of the previous resolver execution level. But what does that mean? 🤔

Well, as you already saw, GraphQL queries can be nested. Each level of nesting (i.e. nested curly braces) corresponds to one resolver execution level. The above query therefore has two of these execution levels.

On the first level, it invokes the `feed` resolver and returns the entire data stored in `links`. For the second execution level, the GraphQL server is smart enough to invoke the resolvers of the `Link` type (because thanks to the schema, it knows that `feed` returns a list of Link elements) for each element inside the list that was returned on the previous resolver level. Therefore, in every of the three `Link` resolvers, the incoming parent object is the element inside the `links` list.




Source: [How To GraphQL](https://www.howtographql.com/)
