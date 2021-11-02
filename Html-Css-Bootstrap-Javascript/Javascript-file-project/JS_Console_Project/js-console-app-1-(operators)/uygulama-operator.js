/*

    Kullanıcıdan alınan 3 sayının en büyüğünü bulalım.

*/

var firstNumber = prompt("Birinci sayıyı giriniz = ");
var secondNumber = prompt("İkinci sayıyı giriniz = ");
var thirdNumber = prompt("Üçüncü sayıyı giriniz = ");


console.log("Birinci sayı en büyük mü ? ",  (firstNumber>secondNumber) && (firstNumber>thirdNumber));
console.log("İkinci sayı en büyük mü ? " ,(secondNumber>firstNumber) && (secondNumber>thirdNumber));
console.log("Üçüncü sayı en büyük mü ? " ,(thirdNumber>firstNumber) && (thirdNumber>secondNumber));