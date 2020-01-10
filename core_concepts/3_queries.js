/*
FETCHING DATA WITH QUERIES
    GraphQL APIs typically exposes a single endpoint. This works because the structure of the data that is
    returned is not fixed. It is completely flexible and let's the client decide what data it actually needs
*/
// allPersons is the root field of the query
// everything that follows the root field, is called the payload of the query
{
  allPersons {
    name
  }
}
// should return
{
  'allPersons': [
    { name: 'Jerry' },
    { name: 'John' },
    { name: 'Mary' },
  ]
}

// If the client wants more data, it will include it in the payload of the query
{
  allPersons {
    name
    age
  }
}
// should return
{
  'allPersons': [
    { name: 'Jerry', age: 26 },
    { name: 'John', age: 26 },
    { name: 'Mary', age: 26 },
  ]
}

// Queries with arguments
{
  allPersons(last: 2) { // return the last 2 person that have been stored in the database
    name
    age
  }
}
// should return
{
  'allPersons': [
    { name: 'Jerry', age: 20 },
    { name: 'John', age: 20 },
  ]
}


// Querying nested information - follow the structure of your types to create your payload
{
  allPersons {
    name
    posts {
      title
    }
  }
}
// the server will then resolve and return all names and posts associated with the person
// should return
{
  'allPersons': [
    {
      name: 'Jerry',
      posts: [{ title: 'GraphQL is awesome' }, ...]
    },
    {
      name: 'Dan',
      posts: []
    },
  ]
}
