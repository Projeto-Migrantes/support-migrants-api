import findAddressByCEP from '../services/addressService.js';

const fetchAddressByCEP = async (req, res) => {
    const { cep } = req.params;

    try {
        const address = await findAddressByCEP(cep);
        return res.status(200).json(address);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export default fetchAddressByCEP;
