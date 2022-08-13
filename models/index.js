const Blogger = require('./Blogger');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

Blogger.hasMany(BlogPost, {foreignKey: 'blogger_id'})
BlogPost.belongsTo(Blogger);

Blogger.hasMany(Comment, {foreignKey: 'blogger_id'});
Comment.belongsTo(Blogger);

BlogPost.hasMany(Comment, {foreignKey: 'blogpost_id'});
Comment.belongsTo(BlogPost);



module.exports = {
    Blogger,
    BlogPost,
    Comment
};