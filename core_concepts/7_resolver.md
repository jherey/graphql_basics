## Resolver Functions
1. GraphQL queries/mutations consists of set of fields
2. GraphQL server has one resolver function per field
3. The purpose of each resolver is to retrieve the data for its corresponding field

##### Query may look like this
```
query {
  User(id: "er3dbci8") {
    name
    friends(first: 5) {
      name
      age
    }
  }
}
```

Resolvers
```
User(id: String!): User
name(user: User!): String!
age(user: User!): Int!
friends(first: Int, user: User!): [User!]!
```
