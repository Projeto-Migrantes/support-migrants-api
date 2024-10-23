import serviceHoursService from "../services/serviceHoursService.js";

const findAll = async (req, res) => {
    try {
        const serviceHours  = await serviceHoursService.findAllServiceHours();
        if (!serviceHours  || serviceHours.length === 0) {
            return res.status(404).json({ message: "Nenhum registro foi encontrado" });
        }
        return res.status(200).json({ serviceHours });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

const create = async (req, res) => {
    try {
        const createdServiceHours= await serviceHoursService.createServiceHours(req.body);

        return res.status(201).json({ message: "Horário de atendimento criado", createdServiceHours });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

export default {
    findAll,
    create,
};
