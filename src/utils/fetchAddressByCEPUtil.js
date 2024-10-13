import axios from 'axios';

// Function to search for address using zip code
const fetchAddressByCEP = async (cep) => {
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

export default fetchAddressByCEP;
