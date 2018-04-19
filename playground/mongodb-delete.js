const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to momgoDb server')
  }
  console.log('Connect to mongoDb server')
  const db = client.db('TodoApp');

  // delete Many
  /*
  db.collection('Todos').deleteMany({
    text: 'Eat lunch'
  }).then((result) => {
    console.log(result);
  })*/

  //deleteOne
  /*
  db.collection('Todos').deleteOne({
    text: 'Example'
  }).then((result) => {
    console.log(result);
  })*/
  //findOneAndDelete
  /*
  db.collection('Todos').findOneAndDelete({compleated: false}).then((result) => {
    console.log(result);
  })*/

  //client.close();
})