var db = require("../models");


module.exports = function(sequelize, DataTypes){
    var Character = sequelize.define('Character', {
        characterName: {
            type: DataTypes.STRING,
            index:true
        },
        hp: {
            type: DataTypes.STRING
        },
        ap: {
            type: DataTypes.STRING
        }
    });

    Character.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Character.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Character;
    }