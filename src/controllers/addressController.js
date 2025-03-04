import addressService from '../services/addressService.js';

/* 
 * Function that fetches the address corresponding to a provided ZIP code (CEP). 
 * If the ZIP code is invalid, it returns an error message.
 */
const fetchAddressByCEP = async (req, res) => {
    const { cep } = req.params;
    try {
        const address = await addressService.findAddressByCEP(cep);
        if(address.erro){
            return res.status(404).json({ message: 'CEP inválido' });
        };
        return res.status(200).json({ data: address });
    } catch (error) {
        return res.status(400).json({ error: 'Erro interno do servidor' });
    };
};

/* 
 * Function that creates a new address using the provided data 
 * and returns a success message with the created address.
 */
const create = async (req, res) => {
    try {
        const createdAddress = await addressService.createAddress();
        return res.status(201).json({ message: 'Endereço criado com sucesso', createdAddress });
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor' });
    };
};

/* 
 * Function that checks if an address exists by ZIP code (CEP). 
 * If it does not exist, it creates a new address and returns its ID.
 */
const existAddress = async (req, res) => {
    const cep = req.body.address.cep;
    
    try {
        const existCEP = await addressService.existsAddress(cep);
        if(!existCEP){
            const createdAddress = await addressService.createAddress(req.body.address);
            return createdAddress.id;
        };
        return existCEP.id;
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor' });
    };
};

export default {
    fetchAddressByCEP,
    existAddress,
    create,
};
