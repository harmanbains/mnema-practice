const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('5c36cd157c8df13981877050').then((todo) => {
//   console.log(todo);
// });

Todo.findOneAndRemove({_id: '5c36ce317c8df13981877082'}).then((todo) => {
  console.log(todo);
});
