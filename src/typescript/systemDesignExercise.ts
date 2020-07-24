import PouchDB from "pouchdb";
import { DateTime } from "luxon";

import { dbComments, dbDoctors, dbMembers } from "./infrastructures/systemDesignInfrastructure";
import { newInMemoryPouchdb } from "./infrastructures/pouchdbUtils";

function exampleForGettingDocFromDbDoctors() {
    return dbDoctors.get("dr1").then(doc => console.log(doc));
}

async function exampleForGettingDocFromDbDoctorsAsAsyncFunction() {
    const doc = await dbDoctors.get("dr1");
    return console.log(doc);
}

async function exampleForGettingAllComments() {
    const doc = await dbComments.allDocs();
    return console.log(doc);
}

async function exampleForGettingAllMembers() {
    const doc = await dbMembers.allDocs();
    return console.log(doc);
}

async function exampleForCreatingNewInMemoryDatabase() {
    return newInMemoryPouchdb('in-memory-db');
}

async function exampleForCreatingNewFileBasedDatabase() {
    return new PouchDB('pouchdb_database');
}

// TODO ------------------------------
// TODO: START - implement the functions below!
// TODO: feel free to not use `await` if you found it unfamiliar
// TODO ------------------------------

// --------
// READ
// --------

export async function getDoctorWithIdEqualsToDr2() {
    // TODO: implement this function
    //  we want to get the doc for `Doctor` with docId equals to "dr2"
    return dbDoctors.get("dr2")
}

export async function getDoctorWithNameEqualsToDoctor3() {
    // TODO: implement this function
    //  we want to get the doc for `Doctor` with name equals to "doctor3"

    // await dbDoctors.createIndex({
    //     index: { fields: ['name',] }
    // });
    // To add the index for better query performance + eliminate the warning from pouchdb
    // But please be aware that this might return an extra row when using `allDocs` in Batch fetch (https://pouchdb.com/api.html#batch_fetch)

    return dbDoctors.find({
        selector: {
            name: { $eq: "doctor3" }
        },
    })
}

export async function getAllDoctorsInDB() {
    // TODO: implement this function
    //  we want to get all `Doctor` doc in the DB
    return dbDoctors.allDocs({
        include_docs: true,
    })
}

export async function getAllCommentsPlacedByDr1() {
    // TODO: implement this function
    //  we want to get all `Comment` doc `placedBy` `dr1`
    return dbComments.find({
        selector: {
            placedBy: { $eq: "dr1" }
        }
    })
}

export async function getAllCommentsPlacedOnOrBefore2020Feb29() {
    // TODO: implement this function
    //  we want to get all `Comment` doc with timestamp on or before 2020-Feb-29

    //  CAUTION: beware of the timezone issues - FYI, the timestamp is stored in UTC

    return dbComments.find({
        selector: {
            // timestamp: { $lte: new Date(2020, 1, 29) } // yes, JS date is counter-intuitive and is a PITA to use, and that's why I prefer using library like `luxon.js` or `moment.js` (see the following line)
            timestamp: { $lte: DateTime.utc(2020, 2, 29).toJSDate() } // Getting comments created on or before 2020-Feb-29
        },
    })
}

export async function getAllCommentsPlacedAfter2020Feb2() {
    // TODO: implement this function
    //  we want to get all `Comment` doc with timestamp after 2020-Feb-2

    //  CAUTION: beware of the timezone issues - FYI, the timestamp is stored in UTC

    return dbComments.find({
        selector: {
            timestamp: { $gt: DateTime.utc(2020, 2, 2).toJSDate() } // Getting comments created after 2020-Feb-2
        },
    })
}

export async function getAllCommentsForMember2() {
    // TODO: implement this function
    //  we want to get all `Comment` doc with timestamp on or before 2020-Feb-29

    //  CAUTION: this one could be tricky

}

// --------
// CREATE
// --------

export async function createDbWithSomeInteractions() {
    const INTERACTIONS = [
        {
            _id: "interaction1",
            doctor: "dr1",
            member: "member1"
        },
        {
            _id: "interaction2",
            doctor: "dr2",
            member: "member1"
        },
        {
            _id: "interaction3",
            doctor: "dr3",
            member: "member2"
        },
    ]

    // TODO: implement this function
    //  we want to create a new database for storing the above interactions

    //  RETURN a pouchdb Database for this function

    //  HINT: feel free to leverage the util function `newInMemoryPouchdb`

    //  CAUTION: this one could also be tricky :-)

    const db = await newInMemoryPouchdb("interactions")
    await db.bulkDocs(INTERACTIONS);
    return db;
}

// --------
// UPDATE
// --------


// --------
// DELETE
// --------


// TODO ------------------------------
// TODO: END - implement the functions above!
// TODO ------------------------------

