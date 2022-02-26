// Callback fonskiyonlar 
/*
    Callback fonskyionlar nedir ? 
    Bir geri çağırma fonksiyonu, başka bir fonksiyona geçirilen bir parametre şeklindeki fonksiyondur. 
    Geri çağırma fonksiyonu, ikinci fonksiyonun içinde çağrılır ya da icra edilir.
    Geri çağırma fonksiyonları, asenkron olarak icra edilirler .
*/


let val 

// Callback adında bir üçüncü bir fonksiyon atayabiliriz. Dışarıdan tanımlanan bir fonksiyon callback adında atanacak .
// Fonksiyon içinde belirlenmiş parametrelere illaki bir değişken atanmak zorunda değilsiniz .  
/* 
    Dışarıdan tanımlanan fonksiyonu multiplebytwo'a callback olarak gönderecek. Ve içerdeki argümanların  üzerinde işlem yapılacak .... 
*/
function  multiplebytwo(a,b,c,Callback){
    let arr =[];
    // İf callback fonksiyon kontrolü 
    if(Callback && typeof Callback ==="function"){
        for(let  i=0; i<3; i++){
            arr[i] = Callback(arguments[i]*3);
        }
        return arr;
    }
}

// BU BİZE NASIL KOLAYLIKLAR SAĞLAR ? 

function addOne(a){
    return a+1;
}

function addTwo(a){
    return a*2;
}

function addThree(a){
    return a+3
}
/* 
    ***  Addone-callback 
    val = multiplebytwo(10,20,30,addTwo)

    Kullanırken bir fonksiyon ismi göndermek zorunda değiliz 
 */

// Anonymous function
// Anonymous function isim kullanmadan sadece bir kez kullanılır.

val = multiplebytwo(5,10,20,function(a){
    return a+10;
})

// val = addOne(98);

// 3 tane fonksiyondan hangisini kullanmak istersek döngü yazmak yerine onu fonksiyon içine yazıyoruz .

/* 
    Aşağıdaki döngü ile işlem yapmak mümkün.
    for(let i=0; i<val.length;i++){
        val[i] = addOne(val[i]);
    }
 */
console.log(val);

/*
    ** Callback fonksiyonlarda dışarıdan fonksiyona bir argüman gönderilebilir . 
    Veya anonymous function'ı callback fonksiyon olarak kullanabiliriz  .
*/