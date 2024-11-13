import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

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
    tableName: 'sessions',
    timestamps: false
});

export default Session;