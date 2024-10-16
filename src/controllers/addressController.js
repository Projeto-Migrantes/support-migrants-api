import addressService from '../services/addressService.js';

const fetchAddressByCEP = async (req, res) => {
    const { cep } = req.params;
    try {
        const address = await addressService.findAddressByCEP(cep);
        if(address.erro){
            return res.status(404).json({message: 'CEP inválido'});
        }
        return res.status(200).json(address);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const create = async (req, res) => {
    try {
        const createdAddress = await addressService.createAddress();
        return res.status(201).json( {message: 'Endereço criado com sucesso', createdAddress} );
    } catch (error) {
        return res.status(500).json( {error: 'Erro interno do servidor '} );
    }
};

const existAddress = async (req, res) => {
    const cep = req.body.address.cep;
    try {
        const existCEP = await addressService.existsAddress(cep);
        if(!existCEP){
            const createdAddress = await addressService.createAddress(req.body.address);
            return createdAddress.id;
        }        
        return existCEP.id;
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    };
}

export default {
    fetchAddressByCEP,
    existAddress,
    create
};
