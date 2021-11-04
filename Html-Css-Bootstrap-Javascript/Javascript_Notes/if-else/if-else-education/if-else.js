var brand = "Audi   ";
var model = "rs7 ";
var automatic = "hayır"; 

/* if / else statement */

/*
if(automatic=="yes"){
    console.log("Aracınız otomatik ");
}else {
    console.log(" Aracınız otomatik değil ");
}

if(automatic){ 
    console.log(brand + " " + model + automatic)
}

if(10==="10"){
    console.log("sayılar eşit ");
}else{
    console.log("sayılar eşit değil .");
}
*/

// 1 ise manual 
// 2 ise manual 
// 3 ise manual
// 4 ise automatic 
// 5 ise atuomatic 
// 6 ise automatic 


var gear = prompt("Kaçıncı vitestesiniz ");

if(gear<1 || gear>6){
    console.log("Geçersiz bir vites değeri girdiniz ")
}else if(gear=="n" || gear=="N"){
    console.log("Aracınız şu an boşta ")  
}

    if(gear>=1 && gear<=3 ){
        console.log("Aracınız manual viteste ");
    }else if(gear>=4 && gear<=6 ) {
        console.log("Aracınız otoamtik viteste ");
    }

/* switch statement */

/*
gear="2"
switch(gear){
    case "1":
        console.log("araç manuel ");
        break;
    case "2":
        console.log("araç manuel ");
        break;
    case "3":
        console.log("araç manuel");
        break;
    default:
        console.log("yanlış değer ")
}

*/