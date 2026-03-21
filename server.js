const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/api', (req, res) => {
    res.json({ message: "Backend working 🔥" });
});

app.listen(3000, () => {
    console.log("Server running");
});