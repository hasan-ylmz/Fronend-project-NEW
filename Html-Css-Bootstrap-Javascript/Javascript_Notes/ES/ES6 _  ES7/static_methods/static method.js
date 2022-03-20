/* 
// Classes

// ES5 
var personES5= function(name,job,yearofBirth){
    this.name= name;
    this.job = job;
    this.yearofBirth = yearofBirth;
}

personES5.prototype.calculateAge = function(){
    return 2022 - this.yearofBirth;
}

var yigit = new personES5("yiğit","frontend developer",1999);

console.log(yigit.calculateAge());

// ES6 
// Class parantezleri içine metod ekleme imkanımız var.
class personES6{
    constructor(name,job,yearofBirth){
        this.name= name;
        this.job = job;
        this.yearofBirth = yearofBirth;
        }
        calculateAge(){
            return 2022 - this.yearofBirth;
    }
    // Statik metodun eklenmesindeki amaç , static methodlar obje üzerinden ulaşılıp kullanılan methodlar değil . 
    // Böyle yaparsak hata alırız . - ÖR emel.sayHi()
    static sayHi(){
        console.log("Hello world");
    }
}

let emel = new personES6("emel","teacher",2002);
console.log(emel);
console.log(emel.calculateAge());
console.log(personES6.sayHi());

*/

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x -b.x;
        const dy = a.y - b.y;
        //
        return Math.hypot(dx,dy);
    }
}

const d1  = new Point(1,1);
const d2 = new Point(20,20);

// Point with  use static method 
console.log(Point.distance(d1,d2));

/* 
    ** Ders kazanımı ** 
    Static method  herhangi  bir point objesinin o anda  oluşturulan instance içierisindeki herhangi bir bilgiye ihtiyaç duymuyor .
    Dışarıda oluşturmuş olduğum objeleri method içerisine gönderiyoruz . const dx,dy üzerinden bir hesaplama yapıyor .
    Peki ,nerede kullanabiliriz ? 
    Yardımcı bir method oluşturmak istediğimizde,veritabanı ile alakalı bir veri silip çekmek istediğimizde

*/