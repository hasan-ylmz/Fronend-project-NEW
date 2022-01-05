// Advanced js : Constructor

/*
    Yigit objesini console'a yazdırabilriz.Fakat çok fazla öğrenci bilgisini obje içerisinde saklamak istersek bir kalıp üzreinden  devam etmek isteriz . 

    let yigit  = {
    name ="yiğit",
    yearOfbirth = 1999,
    job = "teacher",
    }

    console.log(yigit);

*/


// Person constrcuctor ile oluşturulmak istenen obje kolayca oluşturuluyor. 

// function  person(name,yearOfbirth,job){
//     this.name= name;
//     this.yearOfbirth = yearOfbirth;
//     this.job= job;
//     this.calculateAge = function(){
//         return 2021- this.yearOfbirth;
//     }

//     // Tanıumlanan instance'ı yazdırır. 
//     console.log(this);
// }



// Fonksiyonları istersek personeller içine atabiliriz .
let person = function(name,yearOfbirth,job){
    this.name= name;
    this.yearOfbirth = yearOfbirth;
    this.job= job;
    this.calculateAge = function(){
         return 2021- this.yearOfbirth;
     }

//     // Tanıumlanan instance'ı yazdırır. 
     console.log(this);
}


let sena = new person("sena", 1999, "teacher");
let ahmet = new person("ahmet", 1988, "engineer");

console.log(ahmet.name);
console.log(ahmet.job);
console.log(ahmet.yearOfbirth);


console.log("-----------------------------------")

console.log(sena.name);
console.log(sena.yearOfbirth);
console.log(sena.job);
console.log(sena.calculateAge())




// CONTROL +K + U yoru satırını  kaldırır .