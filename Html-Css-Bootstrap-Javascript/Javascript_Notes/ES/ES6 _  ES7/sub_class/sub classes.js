// Sub classes 
// inheritance yoluyla bir sınıf için oluşturulan özelliklerin başka bir sınıfa nasıl aktarıldığını gösterelim .

// ES5 
function personES5(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

personES5.prototype.sayHi = function(){
    return `Hello I'm ${this.firstname} ${this.lastname}` 
}

function CustomerES5(firstname,lastname,phone,username){
    personES5.call(this,firstname,lastname);
    this.phone = phone;
    this.username = username;
}

CustomerES5.prototype = Object.create
(personES5.prototype);


var customer = new CustomerES5("emre ","bahçeci","11112222","darkK1ll4r");
console.log(customer.sayHi());
console.log(customer);

// *** ES6 *** Daha basit bir şekilde bunu yapabiliriz . 

class personES6 {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHi(){
        console.log(`${this.firstname} ${this.lastname} is BOSS`);
    }
}

// extend = 
class CustomerES6 extends personES6{
    constructor(firstname,lastname,phone,username){
        super(firstname,lastname);
        this.phone= phone;
        this.usernma = username;
    }
    static getTotal(){
        return 1000;
    }
}


let customer2 = new CustomerES6("onur","özyılmaz",1111122,"BOSS");
console.log(customer2.sayHi());
console.log(customer2);
// BU şekilde yazılırsa hata alınır .Sebebi ise bunun bir instance metodu olmaması, oluşturulan instance'ın bir elemanı değil . 
// console.log(customer2.getTotal()); Aşağıdaki gibi yazılması gerekiyor .
console.log(CustomerES6.getTotal());

