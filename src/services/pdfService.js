import Pdf from '../models/Pdf.js';

/*
* Function that creates a new pdf using the provided data
*/
const createPdf = async (pdfData) => {
    return await Pdf.create({
        ...pdfData
    });
};

/*
* Function that fetches all pdfs from the database
*/
const findAllPdfs = async () => {
    return await Pdf.findAll({order:[ 
        ['id', 'DESC']
    ]});
};

/*
* Function that updates a pdf
*/
const updatePdfById = async (pdfId, data) => {
    return await Pdf.update({...data}, {
        where: {id: pdfId}
    });
};

/*
* Function that fetches a pdf by language
*/
const findPdfByLanguage = async (language) => {
    return await Pdf.findOne({ 
        where: {language: language }, 
        attributes: ['url']  
    });
};

/*
* Function that deletes a pdf
*/
const deletePdf = async (pdfId) => {
    return await Pdf.destroy({ where: { id: pdfId } });
};

export default {
    createPdf,
    findAllPdfs,
    findPdfByLanguage,
    deletePdf,
    updatePdfById
};
