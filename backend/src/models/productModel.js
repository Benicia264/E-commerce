import pool from "../config/database.js";

export const getAllProducts = async () => {
    const result = await pool.query(
        `SELECT *
         FROM products
         ORDER BY id ASC`
    );

    return result.rows;
};

export const getProductById = async (id) => {
    const result = await pool.query(
        `SELECT *
         FROM products
         WHERE id = $1`,
        [id]
    );

    return result.rows[0];
};

//Ajouter un produit
export const createProduct = async ({
    nom,
    price,
    description,
    stock,
    image_url,
    category_id
}) => {
    const result = await pool.query(
        `INSERT INTO products
        (nom, price, description, stock, image_url, category_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [nom, price, description, stock, image_url, category_id]
    );

    return result.rows[0];
};