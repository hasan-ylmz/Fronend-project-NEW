//  Prototype tabanlı kalıtım

// Kalıtımın prototype kavramı ile nasıl halledileceğini görelim .s

// Farklı iki constructor ' ın birbirine özellik aktarımı nasıl olacak ?

let person = function(name,yearOfBirth,job){
    this.name= name;
    this.yearOfBirth=yearOfBirth;
    this.job= job;
}

person.prototype.calculateAge = function(){
    return 2022 -this.yearOfBirth;
}

// Teacher fonksiyonunda name,yearOfBirth,job değerlerini alacak .Çünkğ bunlar person nesnesinin temel özellikleridir . + subject

let Teacher = function(name,yearOfBirth,job,subject){
    // PROTOTYPE .
    /*  .
    this.name=name;
    this.yearOfBirth= yearOfBirth;
    this.job=job;
    */
    // Person.call() metodu ile person constructor' ı çağırılır.
    // this burada  teacher objesini temsil ediyor . Ve şu elemanları aktar.
    person.call(this,name,yearOfBirth,job);
    this.subject=subject;
}

// Person proto kısmı henüz  constructor'ına aktarılmadı 
// Inherit olmadan calculateAge yazdırılırsa hata alınır.


// INHERIT THE PERSON PROTOTYPE METHODS 

// Prototypeları persondan teacher'a aktardık. Fakat constructor' da 4 parametre olması gerekiyor .
Teacher.prototype=Object.create(person.prototype);

Teacher.prototype.constructor= Teacher

// SET TEACHER CONSTRUCTOR

Teacher.prototype.greeting =function(){
    return "hello my name is "+this.name;
}

let emel = new Teacher("emel",1996,Teacher,"math");




console.log(emel);

// Aşağıdaki kodda hata alacağız .ÇÜnkü emele tanımlanan  bir değer yok.
// console.log(emel.calculateAge());