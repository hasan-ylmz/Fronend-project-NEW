// Object create
/*
    Bir obje oluştururken prototype’ini başka bir objeden oluşturmamızı sağlıyor.
    Object.create() methodu, varolan bir nesneyi prototip olarak kullanarak yeni bir nesne oluşturur.Yani aslında kalıtımı bu yolla yapabiliriz.
*/

let personProto = {
    calculateAge: function(){
        return 2022 - this.yearofBirth
    }
}

let yigit = Object.create(personProto);

yigit.name = "Yiğit";
yigit.yearofBirth = 2010;
yigit.job = "Student"

// Emel objesini daha farklı bir yolla oluşturalım .

let emel = Object.create(personProto,{
    name : {value:"Emel" },
    yearofBirth : {value :1999},
    job: {value :"teacher"}
})

console.log(personProto)
console.log(yigit.calculateAge());

console.log(emel);
console.log(emel.calculateAge());