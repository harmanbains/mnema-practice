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

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     console.log('Unable to insert todo', err);
    //   } else {
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    //
    // });

    db.collection('Users').insertOne({
      name: 'Harman Bains',
      age: 29,
      location: 'Earth'
    }, (err, result) => {
      if (err) {
        console.log('Unable to insert user', err);
      } else {
        console.log(JSON.stringify(result.ops, undefined, 2));
      }

    });

    client.close();
  }

});
