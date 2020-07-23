import * as PouchDB from "pouchdb-memory";

const db = new PouchDB('my_database');

export { db };
