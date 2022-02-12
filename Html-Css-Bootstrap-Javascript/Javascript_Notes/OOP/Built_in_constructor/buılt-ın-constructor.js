// String 
 
var  str1 = "Sadık";
var str2 = new String("Sadık");

console.log(str1); 
console.log(typeof str1);

console.log(str2);
console.log(typeof str2);

if(str1 === "Sadık"){
    console.log("yesss")
}else {
    console.log("nooo")
}


// Sadık Loop 
String.prototype.repeat = function(n){
    return new Array(n+1).join(this)
}

console.log("Sadık".repeat(10));

// Number 

var num1  = 10;
var num2 = new Number(10);

// Boolean 
var bol1 = true;
var bol1 =  new Boolean(true);
 

// Object 

var obj1 = {
    name:"sadık"
};

// Object() !  
var obj2 = new Object({
    name: "Sadık"
});

// Array 
var arr1 = ["yiğit", "şeyma", "ahmet"];
var arr2 = new Array("yiğit", "şeyma", "ahmet");


Array.prototype =  array.prototype.remove ||

function(member){
    var index = this.indexOf(member)

    if(index > -1 ){
        this.splice(index,1);
    }
    return this;
};

console.log(arr1.remove("sena"));