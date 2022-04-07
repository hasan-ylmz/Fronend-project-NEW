// Rest parematers 
/* 
    ** Rest Parameters: Fonksiyonlara sınır sayısı olmadan parametre geçmeye olanak verir.
    ** Rest parametresinde dikkat edilmesi gereken önemli hususlar .
            1 - Rest parameters fonksiyonun son parametresi olmalı . 
                bkz(Syntax Error rest parameter must be last formal parameter)
            2 -  Bir fonskyionda sadece bir tane rest parameters işlemi kullanılabilir. 
            3 - Nesne içerisinde kullanacağınız "setter " bölümünde rest parametresi kullanılamaz . 

            kaynak : https://thrkardak.medium.com/javascript-harikaları-1-rest-parameters-7ba6ddcf6874
*/
// ES5 
function sum(){
    let arr = Array.prototype.slice.call(arguments);

    let result =0;

    arr.forEach(function(item){
        result += item;
    })

    return result;

}

console.log(sum(10,20,30));

// ES6 

function  sumES6(...arr){
    let result = 0;
    arr.forEach( item => result += item);
    return result;
}
console.log(sumES6(30,40,50));

// Driver license query algorithm
function isDriver(age,...years){
    years.forEach(year => console.log(2018- year>=age))
}

isDriver(18,1988,2013,2000);
