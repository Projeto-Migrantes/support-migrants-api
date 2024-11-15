import addressController from './addressController.js';
import serviceStationService from '../services/serviceStationService.js';

/*
* Function that fetches all service stations from the database
*/
const findAll = async (req, res) => {
    try {
        const stationService = await serviceStationService.findAllServiceStations();

        if(!stationService || stationService.length === 0){
            return res.status(200).json({message: 'Nenhum Posto de atendimento encontrado'});
        };

        return res.status(200).json({ stationService });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

/*
* Function that fetches a service station by its ID
*/
const findById = async (req, res) => {
    try {
      const stationService = await serviceStationService.findServiceStationById(req.params.id);

        if(!stationService || stationService.length === 0){
            return res.status(200).json({message: 'Nenhum Posto de atendimento encontrado'});
        };
    
        return res.status(200).json({ stationService });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });    
    };
};

/*
* Function that creates a new service station using the provided data
*/
const create = async (req, res) => {
    try {
        const { service_station } = req.body;

        const addressId = await addressController.existAddress(req, res);
    
        const createdServiceStation = await serviceStationService.createServiceStation(service_station, addressId);

        return res.status(201).json({
             message: 'Posto de atendimento criado com sucesso', 
             createdServiceStation 
            });
    } catch (error) {
        return res.status(500).json( {error: 'Erro interno do servidor '} );
    };
};

/*
* Function that deletes a service station by its ID
*/
const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedServiceStation = await serviceStationService.deleteServiceStation(id);

        if(deletedServiceStation === 0){
            return res.status(200).json({ message: 'Posto de atendimento não encontrado' });
        };

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    };
};

export default { 
    findAll, findById,
    create, destroy,
};