import categoryService from "../services/categoryService.js";

const findAll = async (req, res) => {
    try {
        const categories = await categoryService.findAllCategories();
        if(!categories || categories.length === 0){
            return res.status(404).json({ message: 'Nenhuma categoria encontrada' })
        }
        return res.status(200).json({ categories });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' })        
    }
}

export default {
    findAll,
}