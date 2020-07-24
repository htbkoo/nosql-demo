import * as PouchDB from "pouchdb";

PouchDB.plugin(require('pouchdb-adapter-memory'));
PouchDB.plugin(require('pouchdb-find'));

export function newInMemoryPouchdb(name, extraOptions = {}) {
    return new PouchDB(name, { adapter: 'memory', ...extraOptions });
}

