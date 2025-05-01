import { DataTypes } from "sequelize";
import connection from "../config/database.config.js";

// Define an form template for the database
const Form = connection.define(
  "Form",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("resolved", "read", "unread"),
      allowNull: true,
      defaultValue: "unread",
    },
  },
  {
    tableName: "forms",
  }
);

export default Form;
