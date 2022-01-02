import query from "../index.js";

/* Create a table

id: number/primary key
creaturename: text
creaturetype: text
alignment: text
armourclass: number
hitpoints: number
languages: text
challenge rating: number
*/

const sqlQuery = `CREATE TABLE IF NOT EXISTS monstermenagerie (
    id SERIAL PRIMARY KEY,
     creaturename TEXT, 
     creaturetype TEXT, 
     alignment TEXT, 
     armourclass INTEGER, 
     hitpoints INTEGER, 
     challengerating INTEGER
)`;

async function createMenagerieTable() {
    const result = await query(sqlQuery);
    console.log(result);
}
 
createMenagerieTable();

