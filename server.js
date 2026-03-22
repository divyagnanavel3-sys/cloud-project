const express = require('express');
const mongoose = require('mongoose');

const app = express();

// 🔥 MongoDB Connection
mongoose.connect('mongodb+srv://divyagnanavel33_db_user:zJ5V1zJ7mZuPK71R@mycluster.vopr9dp.mongodb.net/test?retryWrites=true&w=majority')
.then(() => console.log("DB Connected 🔥"))
.catch(err => console.log("DB Error:", err));

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Root route (test)
app.get('/', (req, res) => {
    res.send("Backend working 🔥");
});

// Schema
const User = mongoose.model('User', { name: String });

// API route
app.get('/api', async (req, res) => {
    try {
        const user = new User({ name: "Divya" });
        await user.save();

        res.json({ message: "Data saved in DB 🔥" });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
