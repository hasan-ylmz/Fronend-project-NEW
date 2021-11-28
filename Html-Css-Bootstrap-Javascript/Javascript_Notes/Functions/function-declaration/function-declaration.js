// FUNCTİON DECLARATİONS

/*
        function xyz(a,b){
            var c = a+b ;
            return c;
        }

        console.log(xyz(10,20));

*/


//  FUNCTİON EXPERESSIONS 
//  Epressionda fonksiyon ismini  bir  değişken olarak döndürüyoruz .  Fonksiyon tanımlamasını bu değişken içine alıyor .

/*
 const sum = function(x,y){
    
     if(typeof a === "undefined"){a=0;}
     if(typeof b === "undefined"){b=0;}
    
     var z = x+y;
     return z ;
 }

////////////////////////////////////////////////////////

    - Varsayılan parametre -
    Aşağıda ES6 ile gelen bir değer ataması örneği yapılacaktır .
    X ve y için herhangi bir değer belirlenmediyse fonksiyon içinde değer verilebilir .    


*/ 


// ES6 Default parameters 
const sum = function(x=0,y=0){

    var z = x+y;
    return z ;
}

//Fonskiyon içinde tanımlanan değerler ile işlem yapabiliyoruz. Fakat farklı değerler atayıp işlem yapamıyoruz. Arguments devreye giriyor . 


function sumAll(){
    var total = 0;
    for( let i=0;i<arguments.length;i++){
        total+= arguments[i];
    }
    return total;
}

console.log(sum(20,20));
console.log(sum(30,20));  // NaN
console.log(sum(10,20,40,50)); // Son iki değeri göz ardı eder . Sebebi  fonksiyonda o değerlerin tanımlanmamasından kaynaklıdır . 
console.log(sum(10)); // ES6 Default parameters
console.log(sumAll(10,20,40,50))