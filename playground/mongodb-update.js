const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to momgoDb server')
  }
  console.log('Connect to mongoDb server')
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate(
    { _id: new ObjectID('5ad86464c6cf862eed63fbca') },
    {
      $set: {
        compleated : false
      }
    },
     {
       returnOriginal: false
     }
  ).then ((result) => {
    console.log(result)
  })

  //client.close();
})