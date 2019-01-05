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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      console.log(result);
    });

    //client.close();
  }

});
