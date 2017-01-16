const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unabel to connect: ', err);
  }
  console.log('Connected to MongoDB server');
//Creating data to database
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('User').insertOne({
  //   name: 'Brauden',
  //   age: '28',
  //   location: 'Almaty'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

//   db.close();
// });
