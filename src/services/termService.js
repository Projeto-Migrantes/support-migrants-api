import Term from '../models/Term.js';

const createTerm = async (content, type) => {
    try {
        const term = await Term.create({ content, type });
        return term;
    } catch (error) {
        throw new Error('Erro ao criar o termo: ' + error.message);
    }
};

const getTerm = async (type) => {
    try {
        const term = await Term.findOne({ where: { type } });
        if (!term) throw new Error(`Termo não encontrado para ${type}`);
        return term;
    } catch (error) {
        throw new Error('Erro ao buscar o termo: ' + error.message);
    }
};

const updateTerm = async (content, type) => {
    try {
        const term = await Term.findOne({ where: { type } });
        if (!term) throw new Error(`Termo não encontrado para ${type}`);
        
        term.content = content;
        await term.save();
        return term;
    } catch (error) {
        throw new Error('Erro ao atualizar o termo: ' + error.message);
    }
};

const deleteTerm = async (type) => {
    try {
        const term = await Term.findOne({ where: { type } });
        if (!term) throw new Error(`Termo não encontrado para ${type}`);
        
        await term.destroy();
        return { message: 'Termo deletado com sucesso.' };
    } catch (error) {
        throw new Error('Erro ao deletar o termo: ' + error.message);
    }
};

export default {
    createTerm,
    getTerm,
    updateTerm,
    deleteTerm
};
