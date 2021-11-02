/*

    Uygulama 1 :

    Girilen doğum yılına göre ehliyet alınıp alınamayacağını hesaplayınız .
    Eğer 18 yaşından küçük ise kaç senesi kalmıştır ? 

*/


var birthday = prompt("Doğum tarihinizi giriniz =  ? ")
var year = 2021 ;
var age =year - birthday; 


if(age>=18 && age>=0){
    console.log("Ehliyet alabilirsiniz .")
}else if(age<18 && age>=0) {
    console.log("Ehliyet almaya  ",-(age-18), "yılınız kalmıştır .");
}else {
    console.log("Yanlış değer ")
}

/*
 - made by  HY - 
*/