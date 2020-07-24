import { dbDoctors } from "./infrastructures/systemDesignInfrastructure";

function exampleForGettingDocFromDbDoctors() {
    return dbDoctors.get("dr1").then(doc => console.log(doc));
}

async function exampleForGettingDocFromDbDoctorsAsAsyncFunction() {
    const doc = await dbDoctors.get("dr1");
    return console.log(doc);
}

// TODO ------------------------------
// TODO: START - implement the functions below!
// TODO: feel free to not use `await` if you found it unfamiliar
// TODO ------------------------------

export async function getDoctorWithIdEqualsToDr2() {
    // TODO: implement this function
    //  we want to get the doc for `Doctor` with docId equals to "dr2"

}

export async function getDoctorWithNameEqualsToDoctor3() {
    // TODO: implement this function
    //  we want to get the doc for `Doctor` with name equals to "Doctor 3"

}

export async function getAllDoctorsInDB() {
    // TODO: implement this function
    //  we want to get all `Doctor` doc in the DB
}

// TODO ------------------------------
// TODO: END - implement the functions above!
// TODO ------------------------------

