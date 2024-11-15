import Address from '../models/Address.js';
import fetchAddressByCEPUtil from '../utils/fetchAddressByCEPUtil.js';

/*
* Function that fetches an address by CEP
*/
const findAddressByCEP = async (cep) => {
    return await fetchAddressByCEPUtil(cep);
};

/*
* Function that checks if an address already exists in the database
*/
const existsAddress = async (cep) => {
    return await Address.findOne({where: {cep}});
};

/*
* Function that creates a new address using the provided data
*/
const createAddress = async (address) => {
    return await Address.create({...address});
}

export default {
    findAddressByCEP,  existsAddress,
    createAddress,
};


