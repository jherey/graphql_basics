/*
  GraphQL handles realtime updates with subscriptions

  When a client subscribes to an event, it will initiate and hold a steady connection to the server
  Unlike queries and mutations that follow a typical REQ/RES cycle, subscriptions represents a stream of data
  sent over to the client
*/

// In this example, the client subscribes on the server to get informed about new users being created
// Whenever the event happens, the server pushes the corresponding data to the client
subscription {
  newPerson {
    name
    age
  }
}
