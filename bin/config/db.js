var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'us-cdbr-east-02.cleardb.com',
  user     : 'bde278f5d67f80',
  password : 'f70832a88aa0dd5',
  database : 'heroku_44e8d37e9d01440'
  

  // HOST     : 'LOCALHOST',
  // USER     : 'ROOT',
  // PASSWORD : '123456',
  // DATABASE : 'DFTBOT'

});

db.connect((err) => {
  if(!err)
      console.log('Database is connected!');
  else
      console.log('Database not connected! : '+ JSON.stringify(err, undefined,2));
  });

module.exports = db;
