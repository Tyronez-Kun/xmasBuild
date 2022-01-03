import query from "../index.js";

console.log("hello im running as intended")
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

query(`CREATE TABLE IF NOT EXISTS monstermenagerie (id SERIAL PRIMARY KEY, creaturename VARCHAR(30), creaturetype VARCHAR(30), alignment VARCHAR(30), armourclass INTEGER, hitpoints INTEGER, challengerating INTEGER)`)


//Below i'm not sure if working

/*const sqlQuery = `CREATE TABLE IF NOT EXISTS monstermenagerie (
     id SERIAL PRIMARY KEY,
     creaturename VARCHAR(30), 
     creaturetype VARCHAR(30), 
     alignment VARCHAR(30), 
     armourclass INTEGER, 
     hitpoints INTEGER, 
     challengerating INTEGER
)`;

async function createMenagerieTable() {
    const result = await query(sqlQuery);
    console.log(result);
}
 
createMenagerieTable();
)*/
