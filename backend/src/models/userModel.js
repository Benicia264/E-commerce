import pool from '../config/database.js'

//Lister les utilisateurs
export const getAllUsers= async()=> {
    const result= await pool.query(
        "SELECT * From users ORDER BY id ASC "
    )
    return result.rows
}

//Récupérer un utilisateur par son ID
export const getUserById= async(id)=> {
    const result= await pool.query(
        `SELECT * FROM users where id=$1 `, [id]
    )
    return result.rows[0]
}

//créons un utilisateur
export const createUser= async (nom, prenom, email, adresse, telephone, mot_de_passe) =>{
    const result= await pool.query(
        `INSERT INTO users(nom, prenom, email, adresse, telephone, mot_de_passe) VALUES($1, $2,$3,$4,$5,$6) RETURNING* `, [nom, prenom, email, adresse, telephone, mot_de_passe]

    )
    return result.rows[0]
}
