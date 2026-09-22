const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4001
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Amisha Medicos Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});