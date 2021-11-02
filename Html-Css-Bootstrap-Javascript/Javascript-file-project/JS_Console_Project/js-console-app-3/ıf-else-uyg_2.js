/*

    Uygulama 2 :
    Girilen ay bilgisine göre mevsim bilgisini yazınız .
    (1:ocak  2:şubat)

*/

var month = prompt("Kaçıncı ayda olduğunuzu yazınız .")

switch(month){
    case "12":
    case "1":
    case "2" :
  
        console.log("Kış mevsimi ");
        break;

    case "3":
    case "4":
    case "5":
        console.log("İlkbahar mevsimi");
        break;

    case "6":
    case "7":
    case "8":
        console.log("Yaz mevsimi");
        break;
    
    case "9":
    case "10":
    case "11":
        console.log("Sonbahar mevsimi ");
        break;
    default:
        console.log("Yanlış ay girdiniz .")
}

/* 
- made by HY -
*/