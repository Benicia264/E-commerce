import app from "./app.js";
import pool from "./config/database.js"
const PORT= 8080;

try {
    await pool.query("SELECT NOW()")
    console.log("Connexion PostgreSQL réussie")
} catch(error) {
    console.error("Erreur de connexion PostgreSQL:", error.message)
}
app.listen(PORT, () => {
    console.log(`serveur démarré sur le port ${PORT}`)
})