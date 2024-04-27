'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    merk: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : 'Merk is required'
        },
        notNull : {
          msg : 'Merk is required'
        }
      }
    },
    jenis: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : 'Jenis is required'
        },
        notNull : {
          msg : 'Jenis is required'
        }
      }
    },
    stock: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : 'Stock is required'
        },
        notNull : {
          msg : 'Stock is required'
        }
      }
    },
    harga: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : 'Harga is required'
        },
        notNull : {
          msg : 'Harga is required'
        }
      }
    },
    keterangan: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : 'Keterangan is required'
        },
        notNull : {
          msg : 'Keterangan is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};