module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },

    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: {
        alloNull: false,
      },
    });
  };

  return Order;
};
