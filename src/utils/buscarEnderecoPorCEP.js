const axios = require('axios');

// Função para buscar endereço através do CEP
const buscarEnderecoPorCEP = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        return { message: 'Erro ao tentar buscar endereço.' };
    }
}

module.exports = buscarEnderecoPorCEP;