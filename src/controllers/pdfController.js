import pdfService from '../services/pdfService.js';

/*
* Function that creates a new PDF using the provided data
*/
 const createPdf = async (req, res) => {
    try {
        const pdfData = req.body;
        const newPdf = await pdfService.createPdf(pdfData);

        return res.status(201).json(newPdf);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar PDF." });
    };
};

/*
* Function that fetches all PDFs from the database
*/
 const findAll = async (req, res) => {
    try {
        const pdfs = await pdfService.findAllPdfs();

        if(!pdfs || pdfs.length === 0){
            res.status(200).json({ message: "Nenhum PDF foi encontrado" });
        };

        return res.status(200).json({pdfs});
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar PDFs.", error });
    };
};

/*
* Function that updates a PDF by its ID
*/
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const pdfData = req.body;
        const updatedPdf = await pdfService.updatePdfById(id, pdfData);

        if(updatedPdf[0] === 0){
            return res.status(200).json({ message: 'PDF não encontrado' });
        };

        return res.status(200).json(updatedPdf);
    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    };
};

/*
* Function that fetches a PDF by its language
*/
const findByLanguage = async (req, res) => {
    try {
        const language = req.params.language;
        const pdf = await pdfService.findPdfByLanguage(language);
        
        if(!pdf){
            return res.status(200).json({ message: "Nenhum PDF foi encontrado" });
        };

        return res.status(200).json({ url: pdf.url });
    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    };
};

/*
* Function that deletes a PDF by its ID
*/
const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPdf = await pdfService.deletePdf(id);

        if(deletedPdf === 0){
            return res.status(200).json({ message: 'PDF não encontrado' });
        };

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    };
};

export default {
    createPdf, findAll, findByLanguage,
    destroy, update,
};