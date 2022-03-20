// This  keyword

/*
    *** Ders kazanımı ***
    Bir function tanımlandığında bir scope oluşturuyor.Ve bu scope içerisine tanımladığımız değişkenlerin ayrı bri scope olarak ele alındığını biliyoruz .
    Ancak arrow functionlarda bu durum söz konusu değil.Kendisine yeni bir scope oluşturmuyor .   
    Dolayısıyla arrow functionlarda bulunduğu context içerisinde ele alınıyor . 


    Call property'si içine  bir fonksiyon aktardık.Fonksiyon içindeki this de içinde bulunduğu objeyi temsil ediyor .
    Ancak function içine başka bir function da oluşturulduğunda bazı problemler yaşanıyor . 
*/
// ** ES5
// let list ={
//     category :"tv",
//     name:["samsung","beko","lg"],
//     call: function(){
//         // İçtek functon içine girmeden önce ,self isminde bir değişken oluştruduk.
//         // Değişken içine objenin referansını atıyoruz .
//         var self =this;
//         this.name.map(function(name){
//             // This.category yazdğımızda undefinde değeri alırız. Çünkü o functionda category tanımlanmıyor .
//             // Aslında call functionının içindek thise ulaşamamız gerekiyor , thisler farklı olduğu için 
//             // Function yeni olduğu için yeni bir context oluşturdu .
//             console.log(` ${self.category} ${name}`);
//         })
//     }
// }

/*
// ** ES6
// Burada dikkat edilmesi gereken arrow funciton 'ın o function 'a özel  yeni bir this objesi oluşturmadığıdır .
let list ={
    category :"tv",
    names:["samsung","beko","lg"],
    call: function(){
        this.names.map( (name) => {
            console.log(` ${this.category} ${name}`);
        })
    }
}

list.call();

 ______________________________________________________
 Mini game 
// *** ES5 
function Game(){
    this.live= 0;
    this. addLive =function(){
        var self = this;
        this.Oneup = setInterval(function(){
            console.log(++self.live)
        },1000)
    }
}
*/

// *** ES6
function game(){
    this.live = 0;
    this.addLİve= function(){
        this.OneUP = setInterval(() => {
            console.log(++this.live);
        },1000)
    }
}

let player = new game();
player.addLİve();




