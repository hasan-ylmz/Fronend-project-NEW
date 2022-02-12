// Demo inheritance 
/*
                        STUDENT 
                        - Name           +  Number
                        - Introduce()       Study()
                           

    PERSON             
    - Name 
    - Introduce

                        TEACHER                         ----------->   HEADMASTER                     
                        - Name         +  Branch                       - Name         +   Branch       +    ShareTask()
                        - Introduce       Teach()                      - Introduce        Teach()

*/

// PERSON CONSTRUCTOR
function person(name){
    this.name =  name 
}

person.prototype.Introduce = function(){
    console.log("Hello my name  is "+this.name)
}

// TEACHER CONSTRUCTOR
function teacher(name,branch){
    person.call(this,name);
    this.branch = branch;
}

teacher.prototype.teach = function(){
    console.log("my area of expertise" + this.branch);
}

teacher.prototype= Object.create(person.prototype);
teacher.prototype.constructor = teacher;

// STUDENT CONSTRUCTOR
function student(name,number){
    person.call(this,name);
    this.number = number;
}

student.prototype.study = function(){
    console.log(this.name +" adlı öğrencinin "+" numarası "+  this.number);
}

student.prototype = Object.create(person.prototype);
student.prototype.constructor = student;

// HEADMASTER CONSTRUCTOR 
function Headmaster(name,branch){
    teacher.call(this,name,branch);
}

Headmaster.prototype.shareTask= function(){
    console.log("Ive already shared all the work");
}

Headmaster.prototype =Object.create(teacher.prototype);
Headmaster.prototype.constructor = Headmaster;

// *** Console.log() ***

// Person
let p1 = new person("Abuzer");
p1.Introduce();
p1.Introduce();

// Teacher
let t1= new teacher("Mahmut","math");
t1.Introduce();
t1.teach();

// Student
let s1= new student("Elif",444);
s1.Introduce();
s1.study();

let h1= new Headmaster("Mehmet","geography");
h1.Introduce();
h1.teach();
h1.shareTask();




