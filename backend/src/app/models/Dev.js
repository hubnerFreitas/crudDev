module.exports = (sequelize, DataTypes) => {
  const devs = sequelize.define("devs", {
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    hobby: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,

  });

  return devs;
};