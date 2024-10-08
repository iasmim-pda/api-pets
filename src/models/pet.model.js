import sequelize from "../database/config.js";
import { DataTypes } from "sequelize";
//sequelize-cli

const Pet = sequelize.define("Pet", {
	id: {
		type: DataTypes.NUMBER, //1,2,3
		primaryKey: true,
		autoIncrement: true,
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false, // permitir nulo? não permitir nulo, logo é obrigatório passar um name
	},
	idade: {
		type: DataTypes.NUMBER,
		allowNull: false,
	},
	raca: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});



export { Pet };
