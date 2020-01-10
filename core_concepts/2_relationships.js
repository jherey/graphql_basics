// Adding a relationship

/*
Constraints - One person can be the author of many posts
              Every post is associated with the author
*/
type Person {
  name: String!
  age: Int!
  posts: [Posts!]! // this expresses that a person can have multiple posts
}

type Post {
  title: String!
  author: Person!
}

// This is a one-to-many relationship between the Person and the Post types
