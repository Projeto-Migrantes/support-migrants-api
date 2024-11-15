import connection from './config/database.js';
import runSeeders from './seeders.js';
import Address from './models/Address.js';
import Category from './models/Category.js';
import Form from './models/Form.js';
import Migrant from './models/Migrant.js';
import Institution from './models/Institution.js';
import ServiceStation from './models/ServiceStation.js';
import UserRI from './models/ResponsibleUser.js';
import TargetPopulation from './models/TargetPopulation.js';
import RequirementRestriction from './models/RequirementRestriction.js';
import Pdf from './models/Pdf.js';
import ResponsibleUser from './models/ResponsibleUser.js';
import Term from './models/Term.js';
import User from './models/User.js';
import Session from './models/Session.js';

/*
* Function that creates a database if it does not exist
*/
const create = async (dbName) => {
    try {
        const [results] = await connection.query(`SELECT datname FROM pg_database WHERE datname = '${dbName}';`);

        if (results.length === 0) {
            await connection.query(`CREATE DATABASE "${dbName}";`);
            console.log(`Database "${dbName}" created successfully!`);
        };

    } catch (error) {
        console.error('Error verifying or creating database:', error);
    };
};

/*
* Function that synchronizes the database
*/
const syncDatabase = async (nameDb) => {
    try {
        await create(nameDb);
        await connection.sync({ force: true }); 
        await runSeeders();
        
        console.log("Database synchronized successfully!");
    } catch (error) {
        console.error("Error synchronizing database:", error);
    };
};

export default syncDatabase;
