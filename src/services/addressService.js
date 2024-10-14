import fetchAddressByCEPUtil from '../utils/fetchAddressByCEPUtil.js';

const findAddressByCEP = async (cep) => {
    try {
        const response = await fetchAddressByCEPUtil(cep);
        if(response.erro) {
            throw new Error("CEP inválido");
        }
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default findAddressByCEP;


