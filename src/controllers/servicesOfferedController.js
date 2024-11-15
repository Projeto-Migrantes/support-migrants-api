import servicesOfferedService from "../services/servicesOfferedService.js";

/*
* Function that fetches all services offered from the database
*/
const findAll = async (req, res) => {
    try {
        const servicesOffered  = await servicesOfferedService.findAllServicesOffered();

        if (!servicesOffered  || servicesOffered.length === 0) {
            return res.status(200).json({ message: "Nenhum serviço oferecido foi encontrado" });
        };

        return res.status(200).json({ servicesOffered });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

/*
* Function that creates a new service offered using the provided data
*/
const create = async (req, res) => {
    try {
        const createdServicesOffered = await servicesOfferedService.createServicesOffered(req.body);

        return res.status(201).json({ message: "Serviço Oferecido criado", createdServicesOffered });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

export default {
    findAll, create,
};
