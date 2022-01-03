// Advanced js :  objects & functions 

/*
    Primitives              Everything else 
    - Numbers               Arrays
    - Strings               Function 
    - Booleans              Objectss
    - Undefined             Dates      
    - Null                  String & number object 

    Primitive tipler harici her şey objedir . 
    primitive sadece tek bir değer tutan ve onun dışında ekstra bir özellik getirmeyen kavramlardır . 
*/


let val;

// Object literal 
let num = 10;
let yigit = {
    name : "Yiğit",
    birth : 1999,
    city : "İstanbul"
}


// Diziler de bir objedir fakat array özellikleri üzerine bir de obje özellikleri ekleniyor .
let numbers  = [10, 20 ,30 ]

val = yigit
val = numbers

console.log(val);
console.log(typeof val)

// Person constructor ve ınstructor notu yazılacak .
/*

var sena =  {
    name :  "sena",
    yearOfbirth : 1999,
    job:"student"
}


var sena =  {
    name :  "sena",
    yearOfbirth : 1999,
    job:"engineer"
}

var sena =  {
    name :  "sena",
    yearOfbirth : 1996,
    job:"programmer"
}

Yukarıda 3 tane object literal tanımlandı .Bu objelerin br kalıbı yok .Sena için bir name değişkeni tanımlanabilirken yiğit için de bir değişken tanımlanabilir . Veya farklı bir obje tanımlanabilir .

Buradki örencilerin bilgilerini bir dizi içerisinde tutmak istiyoruz .Dizi elemanlarının her biri de obje olsun istiyoruz . Tanımlanan değişken isimleri de aynı olsun istiyoruz .Bunu için bir kalıp kullanmamız gerekiyor 

    Bu kalıba constructor deniyor .


  Constructor        |       Instances          
---------------------------------------------------
    Person           |       let sena 
                        
    name             |       Sena 
    yearOfbirth      |       1999
    Job              |       Engineer

person isimli bir fonksiyon oluşturuluyor ve fonksiyo içine name , yearOfbirth , job isimli 3 değişken oluşturuyoruz .

- Sena objesi person'dan türetilmiş bir ınstance örnektir 

- Person kalıbına bağlı kalarak istedğiniz kadar obje üretebilirsiniz .

    + Sadece bilgi taşıyan yapılar mı oluşturuyoruz ? 
    - Hayır 

    ÖR - calculateAge isimli bir fonskyion oluşturuyoruz .
    let age = sena.calculateAge(); 
    yazarak yaşını hesaplayabiliyoruz .

    

*/







