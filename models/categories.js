'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
      categories.hasMany(models.articles, {
        as :'article',
        foreignKey:'category_id'
      })

  };
  return categories;
};  