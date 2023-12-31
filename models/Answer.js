const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answer extends Model {}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct: {
      type: DataTypes.BOOLEAN
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'question',
        key:'id'
      }
    },
    
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: 'answer',
  }
);

module.exports = Answer;


/* 
template from 
C:\Users\chris\Documents\bootcamp\class-lessons\13-ORM\01-Activities\22-Stu_One-to-One\Unsolved\models\Reader.js

*/