import organizationService from '../services/organizationService.js';
import addressController from './addressController.js';

const findAll = async (req, res) => {
    try {
        const organizations = await organizationService.findAllOrganizations();
        if(!organizations || organizations.length === 0){
            return res.status(404).json({message: 'Nenhuma organização encontrada'})
        }
        return res.status(200).json({ organizations });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' })        
    }
};

const findById = async (req, res) => {
    try {
      const organization = await organizationService.findOrganizationById(req.params.id);
      if(!organization || organization.length === 0){
        return res.status(404).json({message: 'Nenhuma organização encontrada'})
    }  

    return res.status(200).json({ organization });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' })        
    }
};

const create = async (req, res) => {
    try {
        const addressId = await addressController.existAddress(req, res);

        const createdOrganization = await organizationService.createOrganization(req.body.organization, addressId);
        
        return res.status(201).json( {message: 'Organização criada com sucesso', createdOrganization} );
    } catch (error) {
        console.log(error);
        return res.status(500).json( {error: 'Erro interno do servidor '} );
    }
}

export default { 
    findAll,
    findById,
    create,
};