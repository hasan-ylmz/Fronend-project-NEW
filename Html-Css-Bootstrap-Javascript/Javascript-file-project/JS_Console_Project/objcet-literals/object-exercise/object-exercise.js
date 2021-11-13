/**

    #Bir değişkenin aşağıdaki bilgilerini object içinde saklayınız .
    
    ** ad              : Ali
    ** soyad           : Yılmaz 
    ** Cinsiyet        : Erkek 
    ** Telefon         : 02622222
    ** adres           : kocaeli / gebze 
    ** meslek          : Mühendis 
    ** Diller          : ingilizce,almanca 
    ** hobiler         : sinema ,spor , kitap okumak 


    # 2 : Bu personel kaç dil bilmektedit ? 
    # 3 : Bu personelin hobilrerini alt alta yazdırınız .
    # 4 : 3 elemanlı bir personel  bilgi listesi oluşturunuz .


 */

var Ali ={
    Name : "Ali",
    LastName : "Yılmaz",
    Gender : "Male",
    phone :02622222 ,
    adress :"kocaeli / gebze" ,
    work : "Engineer",
    language : ["English ", "Deutsch "],
    hobbies : ["cinema", "spor" , "Read a book"]
}

// ##   1   ## 
// Dilleri obje  içinde dizi içierisine alıyoruz . Bu şekilde daha kolay ve düzgün olacakatır ? 

console.log(Ali.language.length);
console.log(Ali.language)

// ##   2   ##
Ali.hobbies.forEach(function(hobi){
    console.log(hobi);
});


// ##   3   ## 
var personel= [
    {
        Name : "Sevilay ", 
        LastName : "Dilber",
        Gender : "Female ", 
        phone: 02622223,
        adress: "Kocaeli / Başiskele",
        work:  "engineer ",
        languages : "Deutsch",
        hobbies: "Swim",
    },
    
    {
        Name : "Deniz " , 
        LastName : "Küçük ",
        Gender : "Female ", 
        phone: 02622224,
        adress: "Kocaeli / İzmit ",
        work:  "engineer ",
        languages : "English ",
        hobbies: "Tennis ",
    },
    
    {
        Name : "Zeynep ", 
        LastName : "Büyük ",
        Gender : "Female ", 
        phone: 02622223,
        adress: "İstanbul",
        work:  "General contructor  ",
        languages : "Franace ",
        hobbies: "Basketball",
    }
]

console.log(personel);

/* 
NEVER GİVE UP 
*/

