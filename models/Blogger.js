const {DataTypes, Model} = require('sequelize');
const encrypt = require('bcrypt');
const Sequelize = require('../config/connection');

class Blogger extends Model {}

Blogger.init({
    handle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: 3
        }
    },
    magicword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: 8,
                msg: 'You must use at leat 8 characters.'
            }
        }
    }
},
{
    sequelize: Sequelize,
    modelName: 'blogger',
    hooks: {
        async disguiseMe(blogger) {
            const hashIt = await encrypt.hash(blogger.magicword, 16);
            blogger.magicword = hashIt;
        }
    }
});

Blogger.prototype.pwValidate = async function (password, stored) {
    return await encrypt.compare(password, stored);
}

module.exports = Blogger;