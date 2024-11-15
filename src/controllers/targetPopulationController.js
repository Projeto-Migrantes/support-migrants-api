import targetPopulationService from "../services/targetPopulationService.js";

/*
* Function that fetches all target populations from the database
*/
const findAll = async (req, res) => {
    try {
        const targetPopulation = await targetPopulationService.findAllTargetPopulation();

        if (!targetPopulation || targetPopulation.length === 0) {
            return res.status(200).json({ message: "Nenhuma população alvo foi encontrada" });
        };

        return res.status(200).json({ targetPopulation });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

/*
* Function that creates a new target population using the provided data
*/
const create = async (req, res) => {
    try {
        const createdTargetPopulation = await targetPopulationService.createTargetPopulation(req.body);

        return res.status(201).json({ message: "População criada", createdTargetPopulation });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

export default {
    findAll, create,
};
