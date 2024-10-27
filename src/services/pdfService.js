import Pdf from '../models/Pdf.js';

const createPdf = async (pdfData) => {
    return await Pdf.create({
        ...pdfData
    });
};

const findAllPdfs = async () => {
    return await Pdf.findAll();
};

const findPdfByLanguage = async (language) => {
    return await Pdf.findOne({ 
        where: {language: language }, 
        attributes: ['url']  
    });
}

const deletePdf = async (pdfId) => {
    return await Pdf.destroy({ where: { id: pdfId } });
};

export default {
    createPdf,
    findAllPdfs,
    findPdfByLanguage,
    deletePdf
};
