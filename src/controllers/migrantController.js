import migrantService from "../services/migrantService.js";
import migrantDocumentService from "../services/migrantDocumentService.js";
import addressService from "../services/addressService.js";
import hashPasswordUtil from "../utils/hashPasswordUtil.js";

const findAll = async (req, res) => {
    try {
        const migrants = await migrantService.findAllMigrants();
        if(!migrants || migrants.length === 0){
            return res.status(404).json({ message: "Nenhum migrante foi encontrado" });
        }
        return res.status(200).json({ migrants });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro no servidor" });
    }
};

const findById = async (req, res) => {
    try {
         if (!req.params.id) {
            return res.status(400).json({ message: "ID inválido!" });
        }

        const id = req.params.id;
        if (isNaN(id) || id <= 0) { 
            return res.status(400).json({ message: "O ID deve ser um número válido!" });
        }

        const migrant = await migrantService.findMigrantById(req.params.id);
        if(!migrant){
            return res.status(404).json({ message: "Nenhum migrante foi encontrado" });
        }
        return res.status(200).json({ migrant });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro no servidor" });
    }
};

const getProfile = async (req, res) => {
    try {
        const migrant = await migrantService.findMigrantById(req.migrant.id);
        if(!migrant){
            return res.status(404).json({ message: "Nenhum migrante foi encontrado" });
        }
        return res.status(200).json({ migrant });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro no servidor" });
    }  
};

const create = async (req, res) => {
    try {
        const { migrant, address, migrant_document } = req.body;

        const createdAddress = await addressService.existsAddress(address.cep);
        if (!createdAddress) {
            return res.status(400).json({ message: "Endereço não encontrado." });
        }

        const hashedPassword = await hashPasswordUtil.createHash(migrant.password);
        migrant.password = hashedPassword;

        const createdMigrant = await migrantService.createMigrant(migrant, createdAddress.id);
        if (!createdMigrant) {
            return res.status(500).json({ message: "Falha ao criar migrante." });
        }
        const migrantId = createdMigrant.id;

        const createdDocumentMigrant = await migrantDocumentService.createMigrantsDocuments(migrant_document, migrantId);
        if (!createdDocumentMigrant) {
            return res.status(500).json({ message: "Falha ao criar documento do migrante." });
        }

        return res.status(201).json({ migrant: createdMigrant, document: createdDocumentMigrant });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro no servidor" });
    }
};


const update = async (req, res) => {
    try {
        const newData = req.body;
        const { id } = req.params;

        const [updatedLines] = await migrantService.updateMigrant(newData, id); 
        
        if(updatedLines === 0){
           return res.status(404).json({message: 'Migrante não encontrado'});
        }
        return res.status(200).json({ message: 'Migrante atualizado com sucesso' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor' });        
    }
};

const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedMigrant = await migrantService.deleteMigrant(id);

        if(deletedMigrant === 0){
            return res.status(404).json({ message: 'Migrante não encontrado' });
        };

        return res.status(204).send();

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

const exist = async (req, res) => {
    try {
        const { id } = req.migrant
        const migrant = await migrantService.findMigrantById(id);
        if(!migrant){
            return res.status(404).send();
        }
        return res.status(200).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const hashedPassoword = await hashPasswordUtil.createHash(req.body.password);

    await migrantService.updatePasswordMigrant(hashedPassoword, id);
    return res.status(200).json({ message: 'Senha atualizada com sucesso' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao mudar a senha' });
  }  
};

export default {
    findAll,
    findById,
    create,
    update,
    destroy,
    getProfile,
    exist,
    updatePassword
};