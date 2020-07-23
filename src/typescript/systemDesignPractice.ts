import { newInMemoryPouchDB } from "./pouchdbUtils";

const dbDoctors = newInMemoryPouchDB('doctors');

export { dbDoctors };
