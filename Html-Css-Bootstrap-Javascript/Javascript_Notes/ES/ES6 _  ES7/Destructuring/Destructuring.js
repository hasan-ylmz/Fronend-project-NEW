// Destructuring 
// ***** Destructuring bir obje veya bir array icinden her bir elemanin alinip bir degisken icine kaydedilmesi. 

// *** Destructuring assignment ***
var a,b,rest;
// a =10;
// b=20;

[a,b]= [10,20];
console.log(a);
console.log(b); 

// ** WITH REST **
[a,b,...rest] = [10,20,30,90,80,70];
console.log(a);
console.log(b);
console.log(rest);

// Bu şekilde de kullanılabilir .
 ({a,b}={a:200, b:80});
console.log(a);
console.log(b);


({a,b,...rest}= {a:100, b:200 ,c:400,d:500});
console.log("***************")
console.log(a ,b,rest);

//  *** ARRAY DESTRUCTURİNG *** _ sağ taraftaki objeleri bütün halde yazmak zorunda değiliz .
const arrConfig = ["localHost","8080","102"];

//ES5

/*
 var server =arrConfig[0];
var port =arrConfig[1];
var timeout = arrConfig[2];
 
console.log(server,port,timeout);
*/

// ES6 

// const [server,port,timeout] = arrConfig;
 console.log(arrConfig);

// *** Object destructuring  ***

const objConfig ={
    server:"localHost",  
    port:8080,
    timeOut:102
}

/*  var server = objConfig.server;
 var port =objConfig.port;
 var timeout = objConfig.timeout;

const{server,port,timeout} = objConfig;

console.log(server, " ", port ,timeout);

// objConfig içindeki timeout değişkenini t içine atar. timeout ekrana yazdırıldığında tanımlanmamış bir değer olarak karşımıza çıkar. 
// timeout yerine t'yi ekrana yazdır .

 let {timeout :t }= objConfig;
 console.log(t);
 */

/* 
let {server,port,timeout=303} = objConfig;
console.log(server,port,timeout)
// Timeout object literalde belirlenmezse yukarıdaki tanımlayabiliriz . -timeout=303
// object içinde herhangi  bir değer varsa default olarak o değeri alır . 
*/

const days = ["monday","tuesday","wednesday","thursday","friday"];

// Öteleme işlemi için bir virgül yeterli . wed değişkenine wednesday değerinin gelmesi içn başa 2 tane , koymamız gerkiyor .
// friday için de aynı durum geçerli .
const [,,wed,,fri] = days;

console.log(wed,fri)