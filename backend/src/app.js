import express from "express";
import categoryRoutes from "./routes/categoryRoutes.js"

const app= express();

app.use(express.json())
app.use("/api/categories", categoryRoutes)

app.get('/', (req, res) => {
    res.send("API e-commerce opérationnelle");
});
export default app;