// Feel free to play around with the DBs in this playground file
//  Usage: just change the code, then `cd` to this directory and then run `ts-node playground.ts`

import { dbDoctors } from "./infrastructures/systemDesignInfrastructure";

// Feel free to change anything below the imports
function exampleForGettingDocFromDbDoctors() {
    return dbDoctors.get("dr1").then(doc => console.log(doc));
}

exampleForGettingDocFromDbDoctors();