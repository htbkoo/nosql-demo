// Feel free to play around with the DBs in this playground file
//  Usage: just change the code, then `cd` to this directory and then run `ts-node playground.ts`

import { dbComments, dbDoctors } from "./infrastructures/systemDesignInfrastructure";
import { DateTime } from "luxon";

// Feel free to change anything below the imports
function exampleForGettingDocFromDbDoctors() {
    return dbDoctors.get("dr1").then(doc => console.log(doc));
}

exampleForGettingDocFromDbDoctors();

async function exampleForGettingCommentsFromDbComments() {
    await dbComments.createIndex({
        index: { fields: ['timestamp',] }
    });

    return dbComments.find({
        selector: {
            timestamp: { $lte: new Date(2020, 0, 2) } // yes, JS date is counter-intuitive and is a PITA to use, and that's why I prefer using library like `luxon.js` or `moment.js` (see the following line)
            // timestamp: { $lte: DateTime.utc(2020, 1, 1).toJSDate() } // Getting comments created on or before 1-Jan-2020
        },
    }).then(doc => console.log(doc));
}

exampleForGettingCommentsFromDbComments();