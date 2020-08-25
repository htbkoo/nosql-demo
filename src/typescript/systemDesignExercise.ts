import PouchDB from "pouchdb";

import { dbComments, dbDoctors , dbMembers } from "./infrastructures/systemDesignInfrastructure";
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

}

export async function getDoctorWithNameEqualsToDoctor3() {
    // TODO: implement this function
    //  we want to get the doc for `Doctor` with name equals to "doctor3"

}

export async function getAllDoctorsInDB() {
    // TODO: implement this function
    //  we want to get all `Doctor` doc in the DB

}

export async function getAllCommentsPlacedByDr1() {
    // TODO: implement this function
    //  we want to get all `Comment` doc `placedBy` `dr1`

}

export async function getAllCommentsPlacedOnOrBefore2020Feb29() {
    // TODO: implement this function
    //  we want to get all `Comment` doc with timestamp on or before 2020-Feb-29

    //  CAUTION: beware of the timezone issues - FYI, the timestamp is stored in UTC

}

export async function getAllCommentsPlacedAfter2020Feb2() {
    // TODO: implement this function
    //  we want to get all `Comment` doc with timestamp after 2020-Feb-2

    //  CAUTION: beware of the timezone issues - FYI, the timestamp is stored in UTC

}

export async function getAllCommentsForMember2() {
    // TODO: implement this function
    //  we want to get all `Comment` doc for `Member` with name equals to "member2"

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

