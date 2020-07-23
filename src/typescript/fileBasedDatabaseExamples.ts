import * as PouchDB from "pouchdb";

const db = new PouchDB('pouchdb_database');

db.put({
    _id: 'dave@gmail.com',
    name: 'David',
    age: 69
});

db.changes().on('change', function() {
    console.log('Ch-Ch-Changes');
});

// db.replicate.to('http://example.com/mydb');


export { db };
