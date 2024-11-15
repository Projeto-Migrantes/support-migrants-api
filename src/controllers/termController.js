import termsService from '../services/termService.js';

/*
* Function that creates a new term using the provided data
*/
const createTerm = async (req, res) => {
    try {
        const { content, type } = req.body;
        const term = await termsService.createTerm(content, type);

        res.status(201).json({ message: `Termo para ${type} criado com sucesso`, term });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that fetches a term from the database
*/
const getTerm = async (req, res) => {
    const { type } = req.params;
    try {
        const term = await termsService.getTerm(type);

        if(!term || term.length === 0){
            return res.status(200).json({ message: 'Nenhum termo encontrado' });
        }; 

        res.status(200).json({ term });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that updates a term using the provided data
*/
const updateTerm = async (req, res) => {
    const { content, type } = req.body;
    try {
        const term = await termsService.updateTerm(content, type);

        if(!term || term.length === 0){
            return res.status(200).json({ message: 'Nenhum termo encontrado' });
        };

        res.status(200).json({ message: `Termo para ${type} atualizado com sucesso`, term });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that deletes a term from the database
*/
const deleteTerm = async (req, res) => {
    const { type } = req.params;
    try {
        const result = await termsService.deleteTerm(type);

        if(!result || result.length === 0){
            return res.status(200).json({ message: 'Nenhum termo encontrado' });
        };

        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that fetches all terms from the database
*/
const getTerms = async (req, res) => {
    try {
        const terms = await termsService.getTems();

        if(!terms || terms.length === 0){
            return res.status(200).json({ message: 'Nenhum termo encontrado' });
        };

        res.status(200).json({ terms });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

export default {
    createTerm, getTerm,
    getTerms, updateTerm, deleteTerm
};
