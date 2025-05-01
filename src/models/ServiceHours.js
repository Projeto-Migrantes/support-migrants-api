import { DataTypes } from "sequelize";
import connection from "../config/database.config.js";

// Define a Service Hours template for the database
const ServiceHours = connection.define(
  "ServiceHours",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    service_hours_pt: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    service_hours_fr: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    service_hours_es: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    service_hours_en: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    tableName: "services_hours",
    timestamps: false,
  }
);

export default ServiceHours;
