import serviceCostService from "../services/serviceCostService.js";

const findAll = async (req, res) => {
    try {
        const serviceCost  = await serviceCostService.findAllServiceCost();
        if (!serviceCost  || serviceCost.length === 0) {
            return res.status(404).json({ message: "Nenhum custo de serviço foi encontrado" });
        }
        return res.status(200).json({ serviceCost });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

const create = async (req, res) => {
    try {
        const createdServiceCost = await serviceCostService.createServiceCost(req.body);

        return res.status(201).json({ message: "Custo de serviço criado", createdServiceCost });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

export default {
    findAll,
    create,
};
