const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to momgoDb server')
  }
  console.log('Connect to mongoDb server')
  const db = client.db('TodoApp');
  /*
  db.collection('Todos').find({_id: new ObjectID('5ad864c734182b2f1e9d61c6')}).toArray().then((docs) => {
    console.log('Todos')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch data')
  })
  */
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch data')
  })

  //client.close();
})