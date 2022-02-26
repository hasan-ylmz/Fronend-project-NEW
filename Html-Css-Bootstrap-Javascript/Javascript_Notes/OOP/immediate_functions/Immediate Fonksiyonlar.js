// Immediate fonksiyonlar 
// Bazen yazdığımız  fonksiyonların uygulama başında çalşımasını isteyebiliriz . - ÖR slider'ın sayfa yüklenince sadece bir kez aktif olması gibi . 

function welcome(){}

// Sayfa yüklenince fonksiyonu sadece 1 kez çalıştırmak istiyorum . 
// Sayfa yüklenince 1 kez çalışacağı için fonksiyon ismine gerek yok. Ama syntax' a dikkat ! 

// Fonksiyon parametreleri için süslü parantez sonuna veya en dıştaki parantez dışına parantezleri ekliyoruz .  
/*  - Syntax -   

1. kullanım 

(function(){

}());
----------------------
2. kullanım 
(function(){

})();
 */

(function(name){
    var days=  ["sunday","monday","tuesday","wednesday","thursday","friday","saturday" ]

    var today = new Date();

    var msg = "Welcome "+ `${name}`  +" Today is " + days[today.getDay()];    
    console.log(msg)

}("abuzer"));
