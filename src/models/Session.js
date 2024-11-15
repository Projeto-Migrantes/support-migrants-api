import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define a Session model for the database
const Session = connection.define('Session', {
    sid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    sess: {
        type: DataTypes.JSON,
        allowNull: false
    },
    expire: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    tableName: 'session',
    timestamps: false
});


export default Session;