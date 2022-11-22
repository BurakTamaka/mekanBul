var mongoose=require("mongoose");
<<<<<<< HEAD
var dbURI="mongodb+srv://burakTamaka:1234@mekanbul.7wuzndc.mongodb.net/mekanlar?retryWrites=true&w=majority";
//var dbURI="mongodb://localhost/mekanbul"

mongoose.connect(dbURI, {useNewUrlParser:true});
=======
var dbURI="mongodb+srv://burakTamaka:1234@mekanbul.7wuzndc.mongodb.net/?retryWrites=true&w=majority";
//var dbURI="mongodb://localhost/mekanbul"

mongoose.connect(dbURI);
>>>>>>> e217b9193b1d815d55eaf610598447502e3bf7b5
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });

}
process.on("SIGNIT",function(){
    kapat("uygulama kapatildi",function(){
    process.exit(0);
    });
});
mongoose.connection.on("connected",function(){
console.log(dbURI +"Adresindeki veritabanına bağlandı");
});
mongoose.connection.on("disconnected",function(){
    console.log("baglanti koptu");
});
mongoose.connection.on("error",function(){
        console.log("bağlantı hatası");
});
        

require("./mekansema");