import { DataTypes } from "sequelize";
import connection from "../config/database.config.js";

// Define a service cost model for the database
const ServicesCost = connection.define(
  "ServiceCost",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    services_costs_pt: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    services_costs_fr: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    services_costs_en: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    services_costs_es: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    tableName: "services_costs",
    timestamps: false,
  }
);

export default ServicesCost;
