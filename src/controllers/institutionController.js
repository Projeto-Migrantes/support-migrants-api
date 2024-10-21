import institutionService from '../services/institutionService.js';
import addressController from './addressController.js';

const findAll = async (req, res) => {
    try {
        const institutions = await institutionService.findAllInstitutions();
        if(!institutions || institutions.length === 0){
            return res.status(404).json({message: 'Nenhuma instituição encontrada'})
        }
        return res.status(200).json({ institutions });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' })        
    }
};

const findById = async (req, res) => {
    try {
      const institution = await institutionService.findInstitutionsById(req.params.id);
      if(!institution || institution.length === 0){
        return res.status(404).json({message: 'Nenhuma instituição encontrada'})
    }  
    return res.status(200).json({ institution });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' })        
    }
};

const create = async (req, res) => {
    try {
        const addressId = await addressController.existAddress(req, res);
        const createdInstitution = await institutionService.createOrganization(req.body.institution, addressId);
        return res.status(201).json({ message: 'Instituição criada com sucesso', createdInstitution });
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