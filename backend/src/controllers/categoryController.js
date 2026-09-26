import { getAllCategories, getCategoryById as findCategoryById,
    createCategory as insertCategory,
    updateCategory as modifyCategory,
    deleteCategory as removeCategory

} from "../models/categoryModel.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await getAllCategories()
        res.status(200).json(categories)

    } catch(error) {
        console.error("Erreur lors de la récupération des catégories:", error)
        res.status(500).json({
            message: "Erreur interne du serveur"
        })
    }
   
}

//Récuperer une catégorie par son ID
export const getCategoryById= async(req,res) => {
    try {
        const {id}= req.params
        const category= await findCategoryById(id)
        if(!category){
            return res.status(404).json({
                message: "Catégorie introuvable"
            })
        }
        res.status(200).json(category)
    } catch(error) {
        console.error("Erreur lors de la récupération de la catégorie:",error)
        res.status(500).json({
            message: "Erreur interne du serveur"
        })

    }
}

//Création d'une catégorie
export const createCategory= async(req, res) =>{
    try {
        const {nom, description}= req.body
        if(!nom || !description) {
            return res.status(400).json({
                message: "Le nom et la description sont obligatoires"
            })
        }
        const category= await insertCategory(nom, description)
        res.status(201).json(category)
    } catch(error) {
        console.error(
            "Erreur lors de la création de la catégorie:", error
        )
        res.status(500).json({
            message: "Erreur interne du serveur"
        })
    }
}

//Modifier une catégorie
export const updateCategory= async(req,res) => {
    try {
        const {id}= req.params
        const {nom, description}= req.body

        if(!nom || !description) {
            return res.status(400).json ({
                message: "Le nom et la description sont obligatoires"
            })
        }
        const category= await modifyCategory(id, nom, description)
        if(!category){
            return res.status(404).json({
                "message": "Catégorie introuvable"
            })
        }
        res.status(200).json(category)
    }catch(error){
        console.error(
            "Erreur lors de la modification de la catégorie:", error

        )
        res.status(500).json({
            message: "Erreur interne du serveur"
        })
    }
}

//Supprimer une catégorie
export const deleteCategory= async(req,res) => {
    try {
        const {id}= req.params
        const category= await removeCategory(id)
        if(!category) {
            return res.status(404).json({
                message: "Catégorie introuvable"
            })
        }
        res.status(200).json({
            message: "Catégorie supprimé avec succès."
        })
    } catch(error){
        console.error(
            "Erreur lors de la suppression de la catégorie:", error
        )
        res.status(500).json({
            message: "Erreur interne du serveur"
        })
    }
}
