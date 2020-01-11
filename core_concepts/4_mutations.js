/*
Mutations are used to make changes to the data stored at the backend
Kinds of mutations:
  - creating new data
  - udpating existing data
  - deleting existing data
*/

// Example mutation
mutation {
  createPerson(name: 'Bob', age: 36) {
    name
    age
  }
}
// Server response will look like this
{
  createPerson: {
    name: 'Bob',
    age: 36
  }
}

// A common pattern is GraphQL has a unique ID generated by the server
// Updating the previous Person type by adding ID
type Person {
  id: ID!
  name: String!
  age: Int!
}

// mutation can look like this
// returning just name and age wasn't really helpful since we have the value available to us initially
mutation {
  createPerson(name: 'Bob', age: 36) {
    id
  }
}
