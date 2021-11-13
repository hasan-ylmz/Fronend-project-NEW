var brand = ["Opel", "Toyota","Mazda"];
var model = ["Corsa","Yaris","CX-3"];
var year =  ["2015","2012","2016"];

console.log(brand[0] + " " + model[0] + " " + year[0]);


var opel = ["Opel","Corsa","2015"];
var toyota = ["Toyota","Yaris","2012"];
var mazda = ["mazda","CX-3","2016"];

/*
    Opel dizisinde  istedğimiz değere ulaşabiliriz . Fakat uzun dizilerde  hangi değerin  hangi sırada olduğunu bilmeyebiliriz. 
    Dizilerde bunu bilmemiz zorlaştığı için object kavaramı burada devreye giriyor . 

    Anlatılmak istenen Opel dizisi içinde istediğimiz değerleri bulabiliriz . Fakat çok uzun dizilerde veya içeriğini bilmediğimiz 
    dizilerde bunu yapmamız neredeyse imkansız. Bu da alternatif bir yol  

    Kısaca hangi indekste hangi değerin olduğunu bilmediğimiz için object kavramı ile bunu daha  rahat yapabiliriz  .

    Bir obje tanıtıp (süslü parantezler içerisinde tanımlanır .)
    Object literals kavramıyla istediğiniz bilgiyi dizi içerisinde kolaylıkla alabilirsiniz .

 */

var opel={
    brand : "Opel",
    model : "Corsa",
    year  : "2015",
    color : "Blue",
    automatic : "Yes",
};

console.log(opel.color)

/*

    Yukarıdaki yazdırdığımız değerlere alternatif olarak object içindeki değerlerin indeksleri alınarak yapılabilir .

    console.log(opel["color"]);


    *** Yeni bir object tanımlamak istersek başka bir şekilde obje tanımlama yöntemi kullanabiliriz . 
    *** Obje tanımlamak için iki seçeneğiniz var . Süslü parantezlere alabilirsiniz. Ya da yeni bir obje tanımlayıp onun içine özellikleri yazdırabiliriz .

*/ 

var toyota = new Object();
toyota.brand ="Toyota ";
toyota.model = "Yaris ";
toyota.year = "2012 ";
toyota.automatic =  "yes";
toyota.color = " Red";


console.log(toyota.model);

// Herhangi bir ifadeyi değiştirmek istersek ise  direkt olarak   object içine değeri atıyoruz . 

toyota.model= "Auris";
console.log(toyota.model);

// Her bir objeyi dizi elemanı olarak tanımlayabiliriz .
// Burada yaptığımız şey objeler dizi elemanlarını içerir . Objelerin  (ör -toyota , opel ) hepsini  dizi içerisinde yazdırmaya çalışıyoruz .


var cars = [
    {
        brand : "Opel",
        model : "Corsa",
        year  : "2015",
        color : "Blue",
        automatic : "Yes",
    },
    {
        brand : "Mazda ",
        model : "CX-3",
        year  : "2016",
        color : "Metallic black ",
        automatic : "No",
    }
]

console.log(cars);

for(i=0; i<cars.length; i++){
    console.log(cars[i].brand)
}