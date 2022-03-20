// Sets  (Collection -Unique value)

let val;
var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3)
// mySet.add(2); bu değer yazılmaz .ÇÜnkü 2 değeri mySet içinde mevcut
mySet.add("iki");


// İki tane objeyi mySet içinde tutabiliriz . obj referansının  farklı bir değere karşılık gelmesi  .
// 2 değeri iki kez mySet içine yazılmadı fakat obje aynı değerlere sahip objeler 2 kez yazıldı .
// İlk başta bir objeye sahibiz .Objenin değerinin ne olduğu önemli değil önemli olan objenin kapladığı alanın adresi önemli .
mySet.add({a:1,b:2});
var obj1 = {a:1,b:2};
mySet.add(obj1);

val = mySet.has(1);
val = mySet.has(3);
val = mySet.has(obj1);

val =mySet.size;
val = mySet.delete(3);


console.log(val);
console.log(mySet);


for (let item of mySet){
     console.log(item);
}
// Setlerde keyler ve valueler aynı değeri temsil ediyor. 
for (let item of mySet.keys()){
    console.log(item)
}

for (let item of mySet.values()){
    console.log(item)
}

console.log(Array.from(mySet));

var mySet2 = new Set([1,2,3,4]);

console.log(mySet2);


// Filter metodu array ile kullanılıyor .Dikkat 
// var intersect = new Set(Array.from(mySet).filter(x=> mySet2.has(x)));

// ** İNTERSECT
var intersect = new Set([...mySet].filter( x => mySet2.has(x)));

// DİFFERENCE
var difference = new Set([...mySet].filter(x => !mySet2.has(x)))