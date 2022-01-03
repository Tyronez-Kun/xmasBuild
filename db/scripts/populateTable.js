import query from "../index.js";

/* Enter data into the table

    INSERT INTO monstermenagerie (creaturename, creaturetype) VALUES (Red Dragon, Dragon) etc

id: number/primary key
creaturename: text
creaturetype: text
alignment: text
armourclass: number
hitpoints: number
languages: text
challengerating: number
*/

query(`INSERT INTO monstermenagerie VALUES (1, 'RedDragon', 'Dragon', 'ChaoticEvil', 19, 256, 'Draconic', 17) RETURNING *`)



// I would use something like this below to populate the table via loop:

/* async function populateMenagerieTable() {
    for (let i = 0; i < monstermenagerie.length; i++) {
        const creaturename = monstermenagerie[i].creaturename;
        const creaturetype = monstermenagerie[i].creaturetype;
        const alignment = monstermenagerie[i].alignment;
        const armourclass = monstermenagerie[i].armourclass;
        const hitpoints = monstermenagerie[i].hitpoints;
        const languages = monstermenagerie[i].languages;
        const challengerating = monstermenagerie[i].challengerating;
        const res = await query(
            'INSERT INTO monstermenagerie (creaturename, creaturetype, alignment, armourclass, hitpoints, languages, challengerating) VALUES ("RedDragon", "Dragon", "ChaoticEvil", 19, 256, "Draconic", 17) RETURNING *'
            [creaturename, creaturetype, alignment, armourclass, hitpoints, languages, challengerating]
            );
            console.log(res.rows[0]);
    }
}

populateMenagerieTable();
*/