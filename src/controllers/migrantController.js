import migrantService from "../services/migrantService.js";
import migrantDocumentService from "../services/migrantDocumentService.js";
import hashPasswordUtil from "../utils/hashPasswordUtil.js";
import addressController from "./addressController.js";

/*
* Function that fetches all migrants from the database
*/
const findAll = async (req, res) => {
    try {
        const migrants = await migrantService.findAllMigrants();

        if(!migrants || migrants.length === 0){
            return res.status(404).json({ message: "Nenhum migrante foi encontrado" });
        };

        return res.status(200).json({ 
            message: "Migrantes encontrados com sucesso",
            data: { migrants }
         });
    } catch (error) {
        return res.status(500).json({ message: "Erro no servidor" });
    };
};

/*
* Function that fetches all migrants by search query
*/
const searchMigrants = async (req, res) => {
    try {
        const query = req.query.q; 

        if (!query) {
            return res.status(400).json({ message: 'Query string is required' });
        };

        const migrants = await migrantService.searchMigrants(query);
        res.json({ migrants });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    };
};

/*
* Function that fetches a migrant by its ID
*/
const findById = async (req, res) => {
    try {
         if (!req.params.id) {
            return res.status(400).json({ message: "ID inválido!" });
        };

        const id = req.params.id;
        if (isNaN(id) || id <= 0) { 
            return res.status(400).json({ message: "O ID deve ser um número válido!" });
        };

        const migrant = await migrantService.findMigrantById(req.params.id);
        if(!migrant){
            return res.status(200).json({ message: "Nenhum migrante foi encontrado" });
        };

        return res.status(200).json({ migrant });
    } catch (error) {
        return res.status(500).json({ message: "Erro no servidor" });
    };
};

/*
* Function that fetches the profile of the logged migrant
*/
const getProfile = async (req, res) => {
    try {
        const migrant = await migrantService.findMigrantById(req.migrant.id);

        if(!migrant){
            return res.status(200).json({ message: "Nenhum migrante foi encontrado" });
        };

        return res.status(200).json({ migrant });
    } catch (error) {
        return res.status(500).json({ message: "Erro no servidor" });
    };
};

/*
* Function that creates a new migrant using the provided data
*/
const create = async (req, res) => {
    try {
        const { migrant, migrant_document } = req.body;

        const emailExist = await migrantService.findOneMigrantByEmail(migrant.email);

        if(emailExist){
            return res.status(400).json({ message: "Este e-mail já está sendo usado." });
        };

        const createdAddress = await addressController.existAddress(req, res);
        
        if (!createdAddress) {
            return res.status(200).json({ message: "Endereço não encontrado." });
        };

        const hashedPassword = await hashPasswordUtil.createHash(migrant.password);
        migrant.password = hashedPassword;

        const createdMigrant = await migrantService.createMigrant(migrant, createdAddress);

        if (!createdMigrant) {
            return res.status(500).json({ message: "Falha ao criar migrante." });
        };

        const migrantId = createdMigrant.id;
        const createdDocumentMigrant = await migrantDocumentService.createMigrantsDocuments(migrant_document, migrantId);

        if (!createdDocumentMigrant) {
            return res.status(500).json({ message: "Falha ao criar documento do migrante." });
        };

        return res.status(201).json({ migrant: createdMigrant, document: createdDocumentMigrant });

    } catch (error) {
        return res.status(500).json({ message: "Erro no servidor" });
    };
};

/*
* Function that updates a migrant by its ID
*/
const update = async (req, res) => {
    try {
        const newData = req.body;
        const { id } = req.params;

        const createdAddress = await addressController.existAddress(req, res);
        
        if (!createdAddress) {
            return res.status(400).json({ message: "Endereço não encontrado." });
        };

        if (newData.date_birth) {
            newData.date_birth = new Date(newData.date_birth); 
        };

        if (newData.entry_date) {
            newData.entry_date = new Date(newData.entry_date); 
        };

        const migrantId = id;

        await migrantDocumentService.updateMigrantDocument(newData.migrant_document, migrantId);

        const [updatedLines] = await migrantService.updateMigrant(newData.migrant, id, createdAddress); 
        
        if (updatedLines === 0) {
            return res.status(404).json({ message: 'Migrante não encontrado' });
        };

        return res.status(200).json({ message: 'Migrante atualizado com sucesso' });

    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    };
};

/*
* Function that deletes a migrant by its ID
*/
const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedMigrant = await migrantService.deleteMigrant(id);

        if(deletedMigrant === 0){
            return res.status(404).json({ message: 'Migrante não encontrado' });
        };

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    };
};

/*
* Function that checks if a migrant exists by its ID
*/
const exist = async (req, res) => {
    try {
        const { id } = req.migrant;
        const migrant = await migrantService.findMigrantById(id);

        if(!migrant){
            return res.status(404).send();
        };

        return res.status(200).send();
    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    };
};

/*
* Function that updates a migrant's password by its ID
*/
const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const hashedPassoword = await hashPasswordUtil.createHash(req.body.password);

    await migrantService.updatePasswordMigrant(hashedPassoword, id);

    return res.status(200).json({ message: 'Senha atualizada com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao mudar a senha' });
  };  
};

/*
* Function that counts all migrants
*/
const count = async (req, res) => {
    try {
        const count = await migrantService.countMigrants();

        return res.status(200).json({ count });
    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    };
};

/*
* Function that checks if an email already exists
*/
const emailExist = async (req, res) => {
    try {
        const emailExist = await migrantService.findOneMigrantByEmail(req.body.email);

        if (emailExist) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        };

    } catch (error) {
        return res.status(500).json({ message: "Erro interno no servidor. Tente novamente mais tarde." });
    };
};

export default {
    findAll, findById, create, update,
    destroy, getProfile, exist, updatePassword,
    searchMigrants, emailExist, count,
};