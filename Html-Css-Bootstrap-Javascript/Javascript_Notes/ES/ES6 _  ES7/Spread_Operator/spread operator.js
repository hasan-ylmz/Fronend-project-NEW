// Spread operator 


function Gettotal(a,b,c){
    return a+b+c;
}

console.log(Gettotal(2,3,4));

let numbers = [10,30,50];

// Parametreleri fonksiyona direkt olarak dizi şeklinde göndermek istiyoruz = Spread operator  

//ES5
console.log(Gettotal.apply(null,numbers));


//ES6
console.log(Gettotal(...numbers));

let arr1 =["one","two"];
let arr2 =["three","four","five"];
let arr3 =["-",...arr1,"+","/"]

// arr1.push(...arr2);
// arr1.unshift(...arr2);

console.log(arr1);
console.log(arr3)


let h1 = document.querySelector("h1");
let li_all= document.querySelectorAll("li");

let tags = [h1,...li_all];

tags.forEach( tag => tag.style.color ="limegreen");

console.log(tags);
// Parametrelerle tek tek uğraşmaktansa bir dizi içerisinde hepsine ulaşmamız mümkün.

// exercıse  

let arr4 = [10,40,220];

console.log(Gettotal.apply(null,numbers));
console.log(Gettotal(...arr4))
let arr5 =[20,120,400];