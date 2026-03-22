const express = require('express');
const mongoose = require('mongoose');

const app = express();

// 🔥 MongoDB connect
mongoose.connect('mongodb+srv://divyagnanavel33_db_user:divyaGNANAVEL@mycluster.vopr9dp.mongodb.net/?appName=myCluster')
.then(() => console.log("DB Connected 🔥"))
.catch(err => console.log(err));

// Schema
const User = mongoose.model('User', { name: String });

// API
app.get('/api', async (req, res) => {
    const user = new User({ name: "Divya" });
    await user.save();

    res.json({ message: "Data saved in DB 🔥" });
});

app.use(express.static('.'));

app.listen(3000, () => {
    console.log("Server running");
});
