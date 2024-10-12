import fetchAddressByCEPUtil from '../utils/fetchAddressByCEPUtil.js';

// Função para buscar endereço por CEP
const fetchAddressByCEP = async (req, res) => {
    const { cep } = req.params;

    // Validação simples para verificar se o CEP tem 8 dígitos
    if (!/^\d{5}-?\d{3}$/.test(cep)) {
        return res.status(400).json({ message: 'CEP inválido. Deve ter 8 dígitos.' });
    }

    try {
        const address = await fetchAddressByCEPUtil(cep);
        res.status(200).json({ address });
    } catch (error) {
        console.error(error); // Exibir o erro no console para depuração
        res.status(500).json({ message: 'Erro ao buscar endereço.', error: error.message });
    }
};

module.exports = fetchAddressByCEP;
