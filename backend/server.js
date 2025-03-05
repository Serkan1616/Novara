require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Uygulama oluşturma
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// // MongoDB Bağlantısı
// mongoose
//     .connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("MongoDB bağlantısı başarılı"))
//     .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// Örnek API Endpoint

// Basit bir veri
const users = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    { id: 3, username: 'user3' },
];


// Basit GET Route
app.get('/api/users', (req, res) => {
    res.json(users); // Kullanıcıları JSON formatında döndür
});


app.get("/", (req, res) => {
    res.send("Server Çalışıyor...");
});

// Sunucuyu Başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
});
