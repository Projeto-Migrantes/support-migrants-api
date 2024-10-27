import pdfService from '../services/pdfService.js';

 const createPdf = async (req, res) => {
    try {
        const pdfData = req.body;
        const newPdf = await pdfService.createPdf(pdfData);
        return res.status(201).json(newPdf);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao criar PDF." });
    }
};

 const findAll = async (req, res) => {
    try {
        const pdfs = await pdfService.findAllPdfs();
        if(!pdfs || pdfs.length === 0){
            res.status(404).json({ message: "Nenhum PDF foi encontrado" });
        }
        return res.status(200).json({pdfs});
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar PDFs.", error });
    }
};

const findByLanguage = async (req, res) => {
    try {
        const language = req.params.language;
        const pdf = await pdfService.findPdfByLanguage(language);
        if(!pdf){
            return res.status(404).json({ message: "Nenhum PDF foi encontrado" });
        }

        return res.status(200).json({url: pdf.url});
    } catch (error) {
        return res.status(500).json({message: 'Erro no servidor'});
    }
};

const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedPdf = await pdfService.deletePdf(id);

        if(deletedPdf === 0){
            return res.status(404).json({ message: 'PDF não encontrado' });
        };

        return res.status(204).send();

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

export default {
    createPdf,
    findAll,
    findByLanguage,
    destroy,
}