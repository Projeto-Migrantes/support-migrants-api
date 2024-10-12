import axios from 'axios';

// Function to search for address using zip code
const fetchAddressByCEP = async (cep) => {

// Validation of the CEP format
    if (!/^\d{5}-?\d{3}$/.test(cep)) {
        return { message: 'CEP inválido. Deve ter 8 dígitos.' };
    }

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        // Checks if the response contains an error 
        if (response.data.erro) {
            return { message: 'CEP não encontrado.' };
        }

        return response.data;

    } catch (error) {
        // Returns error message
        return { message: 'Erro ao tentar buscar endereço.' };
    }
}

module.exports = fetchAddressByCEP;
