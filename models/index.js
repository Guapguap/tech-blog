const User = require("./User");
const Posts = require("./Posts");
const Comments = require("./Comments");

// Foreign keys set and onDelete: "CASCADE" to remove any child data related to the parent 
User.hasMany(Posts, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

User.hasMany(Comments, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

Posts.belongsTo(User, {
    foreignKey: "user_id"
})

Posts.hasMany(Comments, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
})

Comments.belongsTo(User, {
    foreignKey: "user_id"
})

Comments.belongsTo(Posts, {
    foreignKey: "post_id"
})

module.exports = {User, Posts, Comments}