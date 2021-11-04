var brand;
var model;
var maxspeed;
var fueltank;
var automatic ;

brand = prompt(" marka giriniz: ");
model = prompt(" model giriniz: ");
maxspeed = prompt(" son sürat  giriniz: ");;
fueltank = prompt(" Kaç lt yakıt alıyor  ");;
automatic = prompt("Otomatik mi ?")

console.log("Aracınızın marka ve modeli : " ,brand + model+ " Yapabileceğiniz son sürat : " + maxspeed + "   Benzin kapasitesi " + fueltank + " lt " + " Yakacağınız toplam benzin miktarı  :    "+ fueltank*7 +"     "+   " Araç otomatik mi ? " + automatic);


/*
    - Derste öğrenilen kısım - 

    prompt ile kullanıcıdan tarayıcı ile bilgi alabiliyoruz. Benzeri Python int(input())'dur.

    
*/