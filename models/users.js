'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany (models.articles, 
      {as:'createdBy', foreignKey:'author_id'})
    // users.belongsTo (models.follow, 
    //   {as:'user', foreignKey:'user_id'})
  };
  return users;
};