const {DataTypes, Model} = require('sequelize');
// const encrypt = require('bcrypt');
const Sequelize = require('../config/connection');


class BlogPost extends Model {};

BlogPost.init({
    post_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    post_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
{
    sequelize: Sequelize,
    modelName: 'blogpost'
})


module.exports = BlogPost;