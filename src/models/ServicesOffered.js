import { DataTypes } from "sequelize";
import connection from "../config/database.config.js";

// Define a model of services offered to the database
const ServicesOffered = connection.define(
  "ServicesOffered",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    services_offered_pt: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    services_offered_fr: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    services_offered_es: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    services_offered_en: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    tableName: "services_offered",
    timestamps: false,
  }
);

export default ServicesOffered;
