import Address from '../models/Address.js';
import ServiceStation from '../models/ServiceStation.js';

const findAllServiceStations = async () => {
    return await ServiceStation.findAll({
        order:[ 
            ['id', 'DESC']
        ],
        include: [{model: Address }]
    });
};

const findServiceStationById = async (id) => {
    return await ServiceStation.findByPk(id, {
      include: [{ model: Address }]
    });
};

const createServiceStation = async (serviceStation, addressId) => {
    return await ServiceStation.create({
        ...serviceStation,
        address_id: addressId,
    });
};

// Delete Service Station By ID
const deleteServiceStation= async (serviceStationId) => {
    return await ServiceStation.destroy({ where: { id: serviceStationId } });
};

export default {
    findAllServiceStations,
    findServiceStationById,
    createServiceStation,
    findAllServiceStations,
    deleteServiceStation,
};