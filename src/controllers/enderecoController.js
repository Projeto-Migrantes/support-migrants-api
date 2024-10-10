const buscarEnderecoPorCEP = require('../utils/buscarEnderecoPorCEP');

const buscarEnderecoPorCEP = async (req, res) => {
    const { cep } = req.params;
    try {
        const endereco = await buscarEnderecoPorCEP(cep);
        res.status(200).json( {endereco });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar endereço. ' })
    }
};

module.exports = buscarEnderecoPorCEP;