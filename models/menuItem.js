module.exports = function(sequelize, DataTypes) {
    var MenuItem = sequelize.define("MenuItem", {
      // Giving the MenuItem model a name of type STRING, and making it required
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
          type: DataTypes.BLOB,
          allowNull: false
      }
  });
    return MenuItem;
};