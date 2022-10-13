var express = require('express');
var router = express.Router();

// başka herhangi bir fonksiyon atanamacayağı için cost parametresini kullanırız
const anaSayfa=function(req, res,next) {
    res.render('anasayfa', { title: 'Ana Sayfa' });
}

const mekanBilgisi=function(req, res,next) {
    res.render('mekanBilgisi', { title: 'Mekan Bilgisi' });
}

const yorumEkle=function(req, res,next) {
    res.render('yorumEkle', { title: 'Yorum ekle' });
}
// buradan bir çok methodunun ismini yazabiliriz
module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}