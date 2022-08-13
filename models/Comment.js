const {DataTypes, Model} = require('sequelize');
// const encrypt = require('bcrypt');
const Sequelize = require('../config/connection');


class Comment extends Model {};

Comment.init({
    comment_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    comment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
{
    sequelize: Sequelize,
    modelName: 'comment'
})


module.exports = Comment;