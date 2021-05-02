import Express from 'express';
import Database from './Database.js';
import CORS from 'cors';
const App = Express();
const port = 45040;
App.use(Express.json());
App.use(CORS());
const db = new Database();
db.connect("Portfolio 2", "WilliamSweginnis");
App.put("/stocks/:rank", async (req, res) => {
    const rank = req.params.rank;
    const stock= req.body.stock;
    const company = req.body.company;
    const rating = req.body.rating;
    const result = await db.createOne(rank, stock, company, rating);
    res.json(result);
});
App.get("/stock/:rank", async (req, res) => {
    const rank = req.params.rank;
    const result = await db.readOne(rank);
    res.json(result);
});

App.patch("/stock/:rank", async (req, res) => {
    const rank = req.params.rank;
     const stock = req.body.stock;
     const company = req.body.company;
     const rating = req.body.rating;

    const result = await db.updateOne(rank, stock, company, rating);
     
    res.json(result);
});
App.delete("/stock/:rank", async (req, res) => {
    const rank = req.params.rank;
    const result = await db.deleteOne(rank);
    res.json(result);
});
App.listen(port);