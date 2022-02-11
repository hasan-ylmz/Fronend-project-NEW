// Advanced JS: ProtoType

/* 
    
    Prototype kavramı nesne tabanlı programlarda önemli .Kalıtım prototype kavramı aracılığıyla yapılıyor  .
    Personlar bir objeydi ve bunlardan ınstance üretebiliyorduk .
 
    Person constructorı içinde name ,yearOfbirth,job  adında 3 tane  property ve calculateAge adında bir metodumuz  var.
    Teacher adında bir  constructor oluştursak ve hangi eğitimleri verdiğiyle   alakalı bir subject alanı ve greeting adında bir metodu var.
    
    Ama teacherın da name,yearOfbirth, job, calculateAge gibi propertylere de ihityacı olduğunu  biliyoruz .  
    Dolayısıyla yeni oluşturacağımız constructorlara eklemektense gelip bu teacher constructor'ını person constructor'ından türetebiliriz (İnherit olma).
    Person objesi teacher objesine kalıtım  yoluyla özelliklerini aktarabilir.

    Bu sayede elimizde olacak olan teacher objesinde hem teacher' a ait subject propertylerine ,  greeting metoduna  hem de persona ait name ,yearOfbirth ,job  propertylerine ve calculateAge metoduna  sahibiz . 
    Person constructorındaki özellikleri teacher constructorına eklemek zorunda değiliz .

    Javascript'te kaltım kavramı prototype ile ele alınıyor .

    Prototype nedir ? 
    -ÖR 
    Bir person objesine sahibiz .Person objesi aslında instance üretebilen bir constructordır.
    Bu constructorlardan instancelar  üretebiliyoruz . Person içindeki bütün alanları aktarmak yerine bazı alanları aktarır bazı alanları da person bünyesinde  bırakabiliyoruz. 
    Bu işlemi prototype ile yapıyoruz .Her objenin bir prototype ksımı oluyor ve bu kısım özellikleri objelerden objelere aktarmamızı sağlıyor .

    + Bunun sağladığı yarar ne ?
    
    Emel adında bir ınstance oluşturuyoruz .Instance  içinde name  ,yearOfbirth ve job  adında 3 tane property var .calculateAge metodu  bulunmuyor  .
    calculateAge emel instance'ından çıkıp person objesinin çatısı altına geçmesinden dolayı bulunmamaktadır . 
    
    Yaşı hesaplamak istedğimizde
    let age =emel.calculateAge()

    Anlatılmak istenen özelliklerin objeler arasında paylaştırılmış olması .

    Emel persondan türüyor ve person da bir object nesnesinden türemiş oluyor .

    Kısaca , 
    Sıfırdan bir teacher objesi oluştururken person'ın özelliklerini sıfırdan teacher objesi  içerisine aktarmaktansa , var olan person objesinin  özelliklerini teachera aktarıp , teacher özelliklerini de üzerine katarak yeni bir obje oluştulur  .
    Person objesinin özelliklerini kalıtım yoluyla teachera aktarıp yepyeni bir teacher objesi oluşturmak  tabi ki de mantıklı olandır .   


*/

let person = function(name,yearOfbirth,job){
    this.name=name;
    this.yearOfbirth= yearOfbirth;
    this.job= job;
}

/*
    Person objesinin proto ksımıdaki calculateAge'i bütün instancelar üzerinde kullanabiliriz .
    Dikkat edilmesi gereken konu her üretilen objenin içerisinde CalculateAge metodunun olmadığıdır .  

*/

// calculateAge prototype
person.prototype.calculateAge =function() {
    return 2022-this.yearOfbirth;
}

//getName prototype
person.prototype.getName = function(){
    return this.name
}

// lastName prototype
person.prototype.lastName =" Turan"

let emel = new person("emel", 1998, "nurse");
let mahmut = new person("mahmut", 2004,"student");

console.log(emel.name);
console.log(emel.job);
console.log(mahmut.calculateAge());
console.log(emel.calculateAge());
console.log(emel.getName());
console.log(emel.lastName);


// hasOwnProperty
/*
    hasOwnProperty metodunun anlamı  üzere objede o özelliğin olup olmadığını kontrol edip boolean bir değer döndürür . ...
    Belirttiğimiz üzere hasOwnProperty metodu string olarak değer almakta ve boolen değer döndürmekte.

    //console.log(emel.hasOwnProperty("lastName"));

    Değeri false döner sebei ise prototype ksımında olan fonksiyonlar person objesine özel olanlardır .
    Person objesinden türetmiş olduğum emel veya mahmut objesine direkt aktarılıyor kopyalanmıyor . 
*/

console.log(emel.hasOwnProperty("name"));
