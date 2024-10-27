import connection from './config/database.js';
import runSeeders from './seeders.js';
import Address from './models/Address.js';
import Category from './models/Category.js';
import Admin from './models/Admin.js';
import Form from './models/Form.js';
import Migrant from './models/Migrant.js';
import Institution from './models/Institution.js';
import ServiceStation from './models/ServiceStation.js';
import UserRI from './models/ResponsibleUser.js';
import TargetPopulation from './models/TargetPopulation.js';
import RequirementRestriction from './models/RequirementRestriction.js';
import Pdf from './models/Pdf.js';

const create = async (dbName) => {
    try {
        // Check if the database already exists
        const [results] = await connection.query(`SELECT datname FROM pg_database WHERE datname = '${dbName}';`);

        // If the database does not exist, create it
        if (results.length === 0) {
            await connection.query(`CREATE DATABASE "${dbName}";`);
            console.log(`Database "${dbName}" created successfully!`);
        } 
    } catch (error) {
        console.error('Error verifying or creating database:', error);
    }
};

const syncDatabase = async (nameDb) => {
    // Wait for the database to be created
    await create(nameDb);

    try {
        await connection.sync({ force: true }); 
        // Wait seeds to be db
        await runSeeders();
        console.log("Database synchronized successfully!");
    } catch (error) {
        console.error("Error synchronizing database:", error);
    }
};

export default syncDatabase;
