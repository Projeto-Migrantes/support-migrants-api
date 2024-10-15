import Address from '../models/Address.js';
import fetchAddressByCEPUtil from '../utils/fetchAddressByCEPUtil.js';

const findAddressByCEP = async (cep) => {
    return await fetchAddressByCEPUtil(cep);
};

const existsAddress = async (cep) => {
    return await Address.findOne({where: {cep}});
};

export default {
    findAddressByCEP,
    existsAddress
};


