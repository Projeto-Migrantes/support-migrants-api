import axios from 'axios';

export const fetchAddressByPostalCode = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      return { message: 'Postal Code not found' };
    }

    const dataUtil = {
      postal_code: response.data.cep,
      street: response.data.logradouro,
      neighborhood: response.data.bairro,
      city: response.data.localidade,
      state: response.data.estado,
    };

    return dataUtil;
  } catch (error) {
    return { message: 'Error when searching for address', error };
  }
};
