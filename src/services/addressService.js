import Address from '../models/Address.js';
import fetchAddressByCEPUtil from '../utils/fetchAddressByCEPUtil.js';

const findAddressByCEP = async (cep) => {
    return await fetchAddressByCEPUtil(cep);
};

const existsAddress = async (cep) => {
    return await Address.findOne({where: {cep}});
};

const createAddress = async (address) => {
    return await Address.create({...address});
}

export default {
    findAddressByCEP,
    existsAddress,
    createAddress,
};


