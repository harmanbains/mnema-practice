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

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5c3039a5af0d57d2430ee9c0')
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    //client.close();
  }

});
