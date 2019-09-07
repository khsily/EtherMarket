

module.exports = (sequelize, DataTypes)=>{
    
  const user = sequelize.define('user', {
      idx:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true      
      },
      email:{
          type:DataTypes.STRING(50),
          allowNull:false
      },
      name:{
        type:DataTypes.STRING(50),
          allowNull:false
      }
  });
  

  user.insert = ({email, name})=>{
      return user.build({
         email: email,
         name: name
      }).save();
  }



  user.findByIdx = (idx) => {
      return user.findAll({
          where:{
            idx: idx
          }
      });
  }

  user.deleteByIdx = ({email}) => {
      return user.destroy({
          where:{
              email: email,
          }
      })
  }


  return user;
}
