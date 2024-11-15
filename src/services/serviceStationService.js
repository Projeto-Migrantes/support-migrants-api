import Address from '../models/Address.js';
import ServiceStation from '../models/ServiceStation.js';

/*
* Function that fetches all service stations from the database
*/
const findAllServiceStations = async () => {
    return await ServiceStation.findAll({
        order:[ 
            ['id', 'DESC']
        ],
        include: [{model: Address }]
    });
};

/*
* Function that fetches a service station by its ID
*/
const findServiceStationById = async (id) => {
    return await ServiceStation.findByPk(id, {
      include: [{ model: Address }]
    });
};

/*
* Function that creates a service station
*/
const createServiceStation = async (serviceStation, addressId) => {
    return await ServiceStation.create({
        ...serviceStation,
        address_id: addressId,
    });
};

/*
* Function that deletes a service station by its ID
*/
const deleteServiceStation= async (serviceStationId) => {
    return await ServiceStation.destroy({ where: { id: serviceStationId } });
};

export default {
    findAllServiceStations, findServiceStationById,
    createServiceStation, findAllServiceStations,
    deleteServiceStation,
};