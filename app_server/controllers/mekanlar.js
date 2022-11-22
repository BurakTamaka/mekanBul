var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render('anasayfa',
   { "baslik": "Ana sayfa",
      "sayfaBaslik":{
      "site":"MekanBul",
      "slogan":"Civardaki Mekanları Keşfet!"
    },
    "mekanlar":[
      {
          "ad":"Starbucks",
          "adres":"Centrum Garden",
          "puan":"4",
          "mesafe":"6km",
          "imkanlar":["çay","kahve","pasta"]
      },
      
      {
          "ad":"cam kafe",
          "adres":"İyaşpark Avm",
          "puan":"4",
          "mesafe":"2km",
          "imkanlar":["Hamburger","Pizza"]
      }
    ]
  });
}

const mekanBilgisi = function (req, res,) {
  res.render('mekanbilgisi',
  { "baslik": 'Mekan Bİlgisi',
  "mekanBaslik":"Starbucks",
  "mekanDetay":{
    "ad":"Starbucks",
    "adres":"Centrum Garden",
    "puan":"4",
    "saatler":[
      {
      "gunler":"Pazartesi-Cuma",
      "acilis":"09.00",
      "kapanis":"23.00",
      "kapali": false
  },
    {"gunler":"Pazartesi-Cuma",
    "acilis":"09.00",
    "kapanis":"23.00",
    "kapali": false

  }
],
    "imkanlar":["çay","kahve","pasta"],
    "koordinatlar":{
      "enlem":"37.7",
      "boylam":"30.5"
    },
    "yorumlar":[
      {
        "yorumYapan":"burak",
        "yorumMetni":"Kahveler harika",
        "tarih":"20 Ekim 2022",
        "puan":"5"        
      },
      {
        "yorumYapan":"furkan",
        "yorumMetni":"tavsiye etmem",
        "tarih":"20 Ekim 2022",
        "puan":"2"   
      }
    ]    
  }
});
}

const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { title: 'Yorum Ekle' });
}

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}