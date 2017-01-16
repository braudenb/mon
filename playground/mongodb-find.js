// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unabel to connect: ', err);
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  db.collection('Todos').find({
    _id: new ObjectID('58651c26f4a37dbe7c8f1523')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  });
  //Counting number of items
  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count: ' + count);
  }, (err) => {
    console.log(err);
  });

  db.collection('User').find({name: 'Mike'}).toArray().then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log(err);
  });


  db.close();
});
