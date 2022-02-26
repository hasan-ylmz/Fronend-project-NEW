// Call -apply -bind  
/* 
    Neden call ,apply ,bind  kullanırız ?

    Call ve apply fonksiyonları ; bir objenin parametre olarak başka bir objeye gönderilmesini ve o objeye ait metotların çalıştırılmasını sağlayan yapılardır . 
    Call ve apply arasındaki fark şudur :call fonksiyonunda obje dışında parametre göndermek istiyorsanız araya virgül koyarak göndermeniz gerekiyor .Her bir parametre karşı tarafa tek tek gönderilmiş oluyor . 
    Diğer bir fonksiyon olan apply'de ise parametreler dizi olarak gönderiliyor  .
    
    Yazılan kodlar her iki fonksiyonda da aynı çıktıyı verecektir . Sadece applyde parametre olarak gönderilen bilgilerin dizi yapısında olduğunda dikkat etmeliyiz .
    kaynak :
    http://www.yucelalkan.com/javascript-call-ve-apply-fonksiyonlarinin-kullanimi
*/
var welcome = function(backend,frontend){
    console.log("welcome "+this.name+"|  Backendde uzman olduğunuz alan nedir ? "+backend+ "| Frontendde uzman olduğunuz alan nedir ? "+frontend);
}

// Bu isimleri fonksiyondaki this'e aktarmak istiyorum.
var yigit = {name: "yiğit"};
var ada = {name:"ada"};

// Aktarma işlemi -CALL 
// Fonksiypndaki parametreleri call metodundan hemen sonra yazabiliriz.
welcome.call(yigit,"Python","JS");
welcome.call(ada,"C#","React");

// APPLY  
// Herhangi bir parametre almıyorsa fonksiyon orada apply ve call metodunun kullanımı aynıdır . 
// Applyde parametreleri dizi şeklinde göndermemiz gerekiyor .Tek tek parametre gönderilmiyor .
   
welcome.apply(yigit,["Asp.net","Vue.js"]);
welcome.apply(ada,[" C++ ", " Html"]);

// Fonksiyonda referans alınarak yeni bir fonksiyon oluşturuluyor .
welcomeYigit = welcome.bind(yigit);
// Fonksiyonu yiğit ve ada için özelleştirdik. Objenin bünyesine fonksiyonları aldık .
// Dolayısıyla this objesi yerine yiğit,ada  getirildi . Sadece parametreleri göndermek yeterli olacaktır .   
welcomeYigit("C+","Angular ");

welcomeAda =welcome.bind(ada);
welcomeAda("PHP"," Angular");