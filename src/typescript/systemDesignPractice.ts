import { dbDoctors } from "./infrastructures/systemDesignInfrastructure";

function exampleForGettingDocFromDbDoctors() {
    return dbDoctors.get("dr1").then(doc => console.log(doc));
}

// TODO ------------------------------
// TODO: START - implement the functions below!
// TODO ------------------------------

export function getDoctorWithIdEqualsToDr2() {
    // TODO: implement this function
    //  we want to get the doc for `Doctor` with docId equals to "dr2"

}

export function getDoctorWithNameEqualsToDoctor3() {
    // TODO: implement this function
    //  we want to get the doc for `Doctor` with name equals to "Doctor 3"

}

export function getAllDoctorsInDB() {
    // TODO: implement this function
    //  we want to get all `Doctor` doc in the DB
}

// TODO ------------------------------
// TODO: END - implement the functions above!
// TODO ------------------------------

