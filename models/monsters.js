import query from "../db/index.js";

//To get everything from table
export async function getAllCreatures() {
    const data = await query(`SELECT * FROM monstermenagerie;`)
    return data.rows;
}

//To get a single entry from table
export async function  getCreatureById(id) {
    const singledata = await query(`SELECT [id] FROM monstermenagerie;`)
    return singledata.rows;
}

