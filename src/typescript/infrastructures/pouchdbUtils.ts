import * as PouchDB from "pouchdb";

PouchDB.plugin(require('pouchdb-adapter-memory'));

export function newInMemoryPouchdb(name, extraOptions = {}) {
    return new PouchDB(name, { adapter: 'memory', ...extraOptions });
}

