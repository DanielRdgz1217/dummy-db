module.exports = (sequelize, Sequelize) => {
    const Actor = sequelize.define("actor", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
    });
    
    return Actor;
};