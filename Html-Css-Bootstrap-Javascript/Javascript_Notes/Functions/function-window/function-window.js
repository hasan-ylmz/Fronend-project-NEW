// ** WİNDOW OBJECT 
/*
    windows  objesi  bizim için bir çok özellik sağlıyor .
    alert,find, focus,
*/

//      sayfada tanımladığım elemanlar windwo objesinin bir elemanı oluyor .
//       Bu tanımlamaya global değişken tanımlama deniyor .


let val; 
var A= 10 ;
val = window;

// Tanımlamaış olduğum bütün bu bu objeler değişken içerisinde yer ediyor .
function abc(){
    return 0;
};

// ** ALERT
// alert("hi !!");

//** PROMPT
// var val = prompt("how old are you ? ") 



// ** CONFİRM 
/*
    var confirm= confirm("Mesajı onaylıyor musunuz ? ")
    if(val==true){
        console.log("Mesj gönderiminiz  onaylandı ")
    }else{
        console.log("Mesaj gönderiminiz onaylanmadı.")
    }
*/

// SCROLLX ,SCROLLY
// val = window.scrollX;
// val = window.scrollY


// **  LOCATİON  

// hash ,host,hostname, href, port vs bilgileri alabilirsiniz .


val = window.location;
val =window.location.hostname;
val = window.location.host;
val = window.location.href
val = window.location.protocol;

// İstersek yeni bir internet adresi atayabiliriz 
// window.location.href= "http://xyz.com.tr"

//  Page refresh 
// window.location.reload();

/*
    console > window.navigator 
    window objesinin navigator adlı bir özelliği var . Navıgator bir obje döndürüyor ve
    tarayıcı ile ilgili bilgilere ulaşabiliyorsunuz .

    tarayıcını ne olduğu ,tarayııcının dilinin ne odluğu  ya da kullanılan pplatformların ne olduğunla alakalı işlemleri bununla yapabilirsiniz .


    window.document
    Bu obje ile  html çıktısını alabiliyoruz .

    document.getElementById("header");
    header kısmını alıyoruz .
    
 */



console.log(val);
