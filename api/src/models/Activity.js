const {DataTypes,} = require("sequelize");

module.exports = (sequelize) => {
//defino el modelo
  sequelize.define("activity",{
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name:{
    type: DataTypes.STRING
  },
  difficulty:{
    type: DataTypes.ENUM("1","2","3","4","5")
  },
  duration:{
    type: DataTypes.STRING
  },
  season:{
   type: DataTypes.ENUM("summer","fall","winter","spring")
  },    
})
}