import fetchAddressByCEPUtil from '../utils/fetchAddressByCEPUtil.js';

// Function to search for address by cep
const fetchAddressByCEP = async (req, res) => {
    const { cep } = req.params;

    //  Validation to check if the zip code has 8 digits
    if (!/^\d{5}-?\d{3}$/.test(cep)) {
        return res.status(400).json({ message: 'CEP inválido. Deve ter 8 dígitos.' });
    }

    try {
        const address = await fetchAddressByCEPUtil(cep);
        res.status(200).json({ address });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Erro ao buscar endereço.', error: error.message });
    }
};

export default fetchAddressByCEP;
