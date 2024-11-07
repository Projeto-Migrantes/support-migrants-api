import termsService from '../services/termService.js';

const createTerm = async (req, res) => {
    const { content, type } = req.body;
    try {
        const term = await termsService.createTerm(content, type);
        res.status(201).json({ message: `Termo para ${type} criado com sucesso`, term });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

const getTerm = async (req, res) => {
    const { type } = req.params;
    try {
        const term = await termsService.getTerm(type);
        res.status(200).json({ term });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
};

const updateTerm = async (req, res) => {
    const { content, type } = req.body;
    try {
        const term = await termsService.updateTerm(content, type);
        res.status(200).json({ message: `Termo para ${type} atualizado com sucesso`, term });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

const deleteTerm = async (req, res) => {
    const { type } = req.params;
    try {
        const result = await termsService.deleteTerm(type);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export default {
    createTerm,
    getTerm,
    updateTerm,
    deleteTerm
};
