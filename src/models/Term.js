import { DataTypes } from "sequelize";
import connection from "../config/database.config.js";

// Define an Term template for the database
const Term = connection.define(
  "Term",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("migrante", "instituicao"),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "terms_conditions",
  }
);

export default Term;
