// *** ARROW FUNCTION *** 

//ES55
let welcomeEs5 = function(){
    console.log("welcome ES5");
}

welcomeEs5();

//ES6 
// Eğer tek bir satır kullanılacaksa süslü parantezlere isterse kullanılmayabilir.
let welcomeEs6 = () => {
    console.log("hello from ES6")
}

welcomeEs6();

// *** WTIH PARAMETERS ***
//ES5 
let multiplyES5 = function(a,b){
    return a*b;
}
 
console.log(multiplyES5(10,2));

// ES6

// let multiplyES6 = (a,b) => {return a*b;}
// +  Parantez  kullanmak zorunda mıyız ?  - Hayır  
// Eğer parantez kullanmak istemezsek return'de kullanmamamız gerekiyor.

let multiplyES6 = (a,b) => a*b;

console.log(multiplyES6(10,23123));

//ES5 
let splitES5 = function(text){
    return text.split(" ");
}

console.log(splitES5("MoDern Javascript teknikleri"));

// ES6
let splitES6 = text => text.split(" ");
console.log(splitES6("Modern Javascript kursu"))

// *** OBJECT LITERALS ***

//ES5
let getProductES5 = function(id, name){
    return {
        id:id,
        name: name
    }
}

console.log(getProductES5("2","Fullstack gardaşşş" ));

//ES6 
let getPRoductES6 = (id,name) => (
    {
        id:id,
        name:name
    }
)

console.log(getPRoductES6("3", "BENEKLİ GARDAŞŞŞ"));

//ES6

const phones =[
    {name:"Iphone 11 pro max", price:11000},
    {name:"Iphone 12 pro max", price:12000},
    {name:"Iphone 13 pro max", price:13000}
]

//ES5
let priceES5 = phones.map(function(phone){
    return phone.price;
});

console.log(priceES5);

//ES6
let priceES6 = phones.map = (phone => phone.price);

console.log(priceES6);

//ES5
const arr = [1,2,3,6,10,50,23,33,90,58];

let eventES5 = arr.filter(function(a){
    return a%2==0;
})

console.log(eventES5);

//ES6 
// Kriteri direkt olarak satır içinde yazıyoruz .
let eventsES6 = arr.filter(a=> a%2==0);
console.log(eventsES6);