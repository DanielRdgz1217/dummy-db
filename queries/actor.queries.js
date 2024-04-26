const generate = require('name-generate');

const db = require("../db.js");
const Actor = db.actor;


async function asyncFunction() {
    actors = [];
    for (let i = 0; i < 500; i++) {
        actors.push({ 
            first_name: generate.first(),
            last_name: generate.last(),
            age: (Math.floor(Math.random() * 65) + 15)
        });
    }
    await Actor.bulkCreate(actors);
    await db.sequelize.close();
}

asyncFunction();