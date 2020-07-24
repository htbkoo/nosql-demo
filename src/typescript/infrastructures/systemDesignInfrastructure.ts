import { newInMemoryPouchdb } from "./pouchdbUtils";
import { COMMENTS, DOCTORS, MEMBERS } from "./fixtures/data";

const dbDoctors = newInMemoryPouchdb('doctors');
dbDoctors.bulkDocs(DOCTORS)

const dbMembers = newInMemoryPouchdb('members');
dbMembers.bulkDocs(MEMBERS)

const dbComments = newInMemoryPouchdb('comments');
dbComments.bulkDocs(COMMENTS)

export { dbDoctors, dbMembers, dbComments };
