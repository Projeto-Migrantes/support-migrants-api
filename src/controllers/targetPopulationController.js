import targetPopulationService from "../services/targetPopulationService.js";

const findAll = async (req, res) => {
    try {
        const targetPopulation = await targetPopulationService.findAllTargetPopulation();
        if (!targetPopulation || targetPopulation.length === 0) {
            return res.status(404).json({ message: "Nenhuma população alvo foi encontrada" });
        }
        return res.status(200).json({ targetPopulation });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

const create = async (req, res) => {
    try {
        const createdTargetPopulation = await targetPopulationService.createTargetPopulation(req.body);

        return res.status(201).json({ message: "População criada", createdTargetPopulation });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

export default {
    findAll,
    create,
};
