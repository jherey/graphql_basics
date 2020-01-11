## GraphQL

My GraphQL level up resource

#### Getting started
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



Source: [How To GraphQL](https://www.howtographql.com/)
