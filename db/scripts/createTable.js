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
     creaturename VARCHAR(30), 
     creaturetype VARCHAR(30), 
     alignment VARCHAR(15), 
     armourclass INTEGER, 
     hitpoints INTEGER, 
     challengerating INTEGER
)`;

async function createMenagerieTable() {
    const result = await query(sqlQuery);
    console.log(result);
}
 
createMenagerieTable();

