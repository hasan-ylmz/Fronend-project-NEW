// Maps : key value pairs (collection)

let val;

const numbers = new  Map();
// Numbers bir instance oluyor. Ve bu instance aracılığı ile belirli metodlara sahip olabiliyor.
// Set metodu objenin içerisine bir key valuesu (number,string veya bir fonksiyon ya da obje  olabilir.) 
// Numbers listesinin içerisindeki elemanı temsil edecek bir anahtardır.Anahtarın değeri ise ikinci kısıma yazılır .
numbers.set(1,"bir");
numbers.set("2","iki");
numbers.set("3","üç");
numbers.set("four","dört");


val = numbers;
val =numbers.get(1);
val = numbers.get("2");
val = numbers.get("3");
val = numbers.get(4);

val = numbers.size;
val = numbers.has("3");
val = numbers.delete(2)
// Eleman sahipliği
val = numbers.has(2);
// val = numbers.clear(); = Bütün elemanları siler.

console.log(val);



for(var [key,value] of numbers){
    console.log(key + " "+ value)
}

for(var [key,value] of numbers.entries()){
    console.log(key + " "+ value)
}

for(var key of numbers.keys()){
    console.log(key)
}
// values ve value farkı
for(var value of numbers.values()){
    console.log(value)
}

numbers.forEach(function(key,value){
    console.log(key + " - "+ value)
});

var first = new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"],
]);

var second = new Map([
    [4,"four"],
    [5,"five"],
]);


// İki objeden bir map objesi oluşturma
var merged = new Map([...first,...second]);

console.log(merged);