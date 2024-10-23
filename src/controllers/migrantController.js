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
        const migrant = await migrantService.findMigrantById(req.params.id);
        if(!migrant || migrant.length === 0){
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

        const hashedPassoword = await hashPasswordUtil.createHash(migrant.password);
        migrant.password = hashedPassoword;

        const createdMigrant = await migrantService.createMigrant(migrant, createdAddress.id);
        const migrantId = createdMigrant.id;

        const createdDocumentMigrant = await migrantDocumentService.createMigrantsDocuments(migrant_document, migrantId);
        
        return res.status(201).json({ message: "Migrante criado", createdMigrant, createdDocumentMigrant });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro no servidor" });
    }
};

export default {
    findAll,
    findById,
    create
};