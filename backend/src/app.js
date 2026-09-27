import express from "express";
import categoryRoutes from "./routes/categoryRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app= express();

app.use(express.json())
app.use("/api/categories", categoryRoutes)
app.use("/api/users", userRoutes)

app.get('/', (req, res) => {
    res.send("API e-commerce opérationnelle");
});
export default app;