//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to momgoDb server')
  }
  console.log('Connect to mongoDb server')
  const db = client.db('TodoApp');
  /*
  db.collection('Todos').insertOne({
    text: 'Hallo Alex',
    compleated: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to indert todo', err)
    }
    console.log(JSON.stringify(result.ops, undefined,2));
  });
  */
  /*
   db.collection('Users').insertOne({
     name: 'Alex',
     age: 45,
     location: 'Wustrow'
   }, (err, result) => {
     if (err) {
       return console.log('Unable to indert user', err)
     }
     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
   });
   */

  client.close();
})