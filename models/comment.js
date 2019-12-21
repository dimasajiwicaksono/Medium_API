'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.articles, 
      { as :'comments', foreignKey:'article_id'}
  )
  };
  return comment;
};