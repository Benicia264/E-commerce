import {
    getAllUsers,
    getUserById as findUserById,
    createUser as insertUser
} from "../models/userModel.js";

//Lister les utilisateur
export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des utilisateurs:", error
        )
        res.status(500).json({
            message: "Erreur interne du serveur"
        })
    }
}

//Récupérer un utilisateur par son ID
export const getUserById = async (req,res) => {
    try {
        const { id } = req.params
        const user = await findUserById(id)
        if (!user) {
           return res.status(404).json({
                message: "Utilisateur introuvable"
            })
        }
        res.status(200).json(user)
    } catch(error) {
        console.error(
            "Erreur lors de la récupération d'un utilisateur par son ID:", error
        )
        res.status(500).json({
            message: "Erreur interne du serveur"
        })
    }

}

//Création d'un utilisateur
export const createUser= async(req, res)=> {
    try {
        const {nom, prenom, email, adresse, telephone, mot_de_passe}= req.body
        if(!nom || !prenom || !email || !adresse ||!telephone || !mot_de_passe) {
            return res.status(400).json({
                message: "Tous les champs doivent obligatoirement etre remplis."
            })
        }
        const user= await insertUser(nom, prenom, email, adresse, telephone, mot_de_passe)
        res.status(201).json(user)

    } catch(error){
        console.error(
            "Erreur lors de la création d'un utilisateur:", error
        )
        res.status(500).json({
            message: "Erreur interne du serveur"
        })
    }
}