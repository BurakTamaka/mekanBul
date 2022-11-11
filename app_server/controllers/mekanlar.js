var express = require("express");
var router = express.Router();

// slash gördüğün zaman function çalışır
const anaSayfa = function (req, res, next) {
  res.render("anasayfa", {
    "baslik": "Anasayfa",
    "sayfaBaslik": {
      "siteAd": "Mekanbul",
      "slogan": "Civardaki Mekanları Keşfet!",
    },
    "mekanlar":[
      {
        "ad":"Barida Kafe",
        "adres":"Sdü Batı Kampüsü",
        "puan":"4",
        "mesafe":"2km",
        "imkanlar":["Kahve","Çay","çikolata"]
      },
      {
        "ad":"Gloria",
        "adres":"Sdü Doğu Kampüsü",
        "puan":"2",
        "mesafe":"5km",
        "imkanlar":["Gazoz","Tavuk döner","Poğaca"]
      }]
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekanbilgisi",
  { "baslik": "Mekan Bilgisi",
   "mekanBaslik":"Barida Kafe",
   "mekanDetay":{
      "ad":"Barida Kafe",
      "adres":"Sdü Batı Kampüsü",
      "puan":"4",
      "saatler":[
        {
          "gunler":"  Pazartesi-Cuma",
          "acilis":"9:00",
          "kapanis":"23:00",
          "kapali": false
        },
        {
          "gunler":"  Cumartesi-Pazar",
          "acilis":"10:00",
          "kapanis":"22:00",
          "kapali": false
        }],
      "imkanlar":["Kahve","Çay","çikolata"],
      "koordinatlar":{
        "enlem":"37.7",
        "boylam":"30.5"
      },
      "yorumlar":[
        {
          "yorumYapan":"Burak",
          "puan":"3",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"rezilllll"
        },
        {
          "yorumYapan":"Furkan",
          "puan":"2",
          "tarih":"20 Ekim 2022",
          "yorumMetni":{
            "$date":"2022-10-21T11:32:11.584Z"
          }
        }]
   }
});
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Sayfası" });
};
module.exports = { anaSayfa, mekanBilgisi, yorumEkle };