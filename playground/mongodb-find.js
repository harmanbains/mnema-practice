// const MongoClient = require('mongodb').MongoClient;
// instead of above we use destructuring as below (same)
// and also create ObjectID var from mongodb library
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //.find returns a cursor
    //.toArray turns cursor into array of document objects with
    //the properties they have (text, _id, _completed etc)
    //toArray returns a promise
    //.find can also be given a query
    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todo');
    });

    //client.close();
  }

});
