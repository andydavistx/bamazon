module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    description: {
      type:DataTypes.STRING
    },
    price:{
      type:DataTypes.DECIMAL(10,2)
    },
    name: {
      type:DataTypes.STRING
    }
  },{timestamps:false});

  return Product;
};