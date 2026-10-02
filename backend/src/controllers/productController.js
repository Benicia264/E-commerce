import {
    getAllProducts,
    getProductById,
    createProduct
} from "../models/productModel.js";

//Récupérer tous les produits
export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();

        res.status(200).json(products);
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);

        res.status(500).json({
            message: "Erreur interne du serveur"
        });
    }
};

//Récupérer un produit par son ID
export const getProduct = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Produit introuvable"
            });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error("Erreur lors de la récupération du produit :", error);

        res.status(500).json({
            message: "Erreur interne du serveur"
        });
    }
};

//Ajouter un produit 
export const createProductController = async (req, res) => {
    try {
        const {
            nom,
            price,
            description,
            stock,
            image_url,
            category_id
        } = req.body;

        const product = await createProduct({
            nom,
            price,
            description,
            stock,
            image_url,
            category_id
        });

        res.status(201).json(product);
    } catch (error) {
        console.error("Erreur lors de la création du produit :", error);

        res.status(500).json({
            message: "Erreur interne du serveur"
        });
    }
};