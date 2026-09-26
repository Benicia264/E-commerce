import pool from "../config/database.js"

export const getAllCategories= async() => {
    const result= await pool.query(
        "SELECT * FROM categories ORDER BY id ASC"
    )
    return result.rows
}


//Récupérer une catégorie par son ID
export const getCategoryById= async (id) => {
    const result= await pool.query("SELECT * FROM categories WHERE id= $1", [id])
    return result.rows[0]
}

//Créer une catégorie
export const createCategory= async(nom , description) => {
    const result= await pool.query("INSERT INTO categories(nom, description) VALUES($1, $2) RETURNING*", [nom, description])
     return result.rows[0]

}

//Modifier une catégorie
export const updateCategory= async(id, nom, description) => {
    const result= await pool.query(
        `UPDATE categories SET nom=$1, description=$2 WHERE id=$3
        RETURNING*`, [nom, description, id]
    )
    return result.rows[0]
}

//Supprimer une catégorie
export const deleteCategory= async(id) => {
    const result= await pool.query(
        `DELETE FROM categories WHERE id=$1 RETURNING*`, [id]
    )
    return result.rows[0]
}