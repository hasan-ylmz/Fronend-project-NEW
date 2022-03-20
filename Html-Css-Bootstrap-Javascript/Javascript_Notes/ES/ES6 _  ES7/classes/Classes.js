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
}

let emel = new personES6("emel","teacher",2002);
console.log(emel);
console.log(emel.calculateAge());