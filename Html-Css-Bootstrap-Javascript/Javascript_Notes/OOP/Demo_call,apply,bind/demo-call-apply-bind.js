// Demo - Call,apply,bind
// Belirli değer aralıklarına göre true false değeri döndüren console fonksiyonu
var num ={
    min :0,
    max:100,
    checkNumericRange : function(value){
        if(typeof value  !== "number"){
            return false;
        }else {
            return value>=this.min && value<=this.max;
        }
    }
}
console.log(num.checkNumericRange(12));

var num1=  {min: 50 , max:70};

console.log(num.checkNumericRange.call(num1,60));
console.log(num.checkNumericRange.apply(num1,[43]));

var checkNumber = num.checkNumericRange.bind(num1);
console.log(checkNumber(76));
