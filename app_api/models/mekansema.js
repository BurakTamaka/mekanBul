var mongoose=require("mongoose");

var yorumSema=new mongoose.Schema({
    yorumYapan:{type:String, required:true},
    yorumMetni:{type:String, required:true},
    puan:{type:Number,default:0,min:0,max:5},
    tarih:{type:Date, default:Date.now}
});
var saatSema=new mongoose.Schema({
    gunler:{type:String, required:true},
    acilis:String,
    kapanis:String,
<<<<<<< HEAD
    kapali:{type:Boolean}
=======
    kapali: Boolean
>>>>>>> e217b9193b1d815d55eaf610598447502e3bf7b5
});

var mekanSema=new mongoose.Schema({
   
    ad:{type:String,required:true},
    adres:{type:String,required:true},
    puan:{type:Number,default:0,min:0,max:5},
    imkanlar:[String],
    koordinatlar:{type:[Number],index:"2dsphere"},
    saatler:[saatSema],
    yorumlar:[yorumSema]

});

mongoose.model("mekan",mekanSema,"mekanlar");