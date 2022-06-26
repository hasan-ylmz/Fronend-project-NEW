// Ajax & Xhr objesini tanıyalım. 

var Xhr = new XMLHttpRequest();
/* 
    -ResponseText : 

*/
Xhr.onreadystatechange = function(){
    if(Xhr.readyState === 4){
        if(Xhr.status=== 200){
            console.log(Xhr.responseText);
        }else if(Xhr.status === 404){
            console.log("Dosya bulunamadı .")
        }
    }
}

  
// Kullanıcı beklerken bir gif gösterilirebilir. Bir loading img gösterilebilir.  
Xhr.onprogress = function(){
    console.log("Süreç devam ediyor.");
} 
// get ,post asenkron ve senkron mu olacak bunu yazacağız 


/* 
    - Xhr get ve post- 
    Get:  serverdan bir bilgi almak için kullanılır .
    Post : Servera bir bilgi upload(güncelleme ) ederken post kullanılır .
    3.parametre request !ın  asenkron mu yoksa senkron mu olacağını yazıyor .
    *** False : normal senkron  
*/
Xhr.open("Get","a.txt",true);
Xhr.send();
// asenkron metodda server bloklanmaz ama senkron olursa server bloklanır ve hello ifadesi en son yazılır . Aşağıdaki daha geniş açıklaması 
// Sorgu sürerken server bloklanmadı.Ve en son hello ifadesi yazdırılıyor.
// Eğer asenkron değil senkron metoduna çevirirsek işlem bloklanır ve en sonda hello yazıldığını görürüz.
console.log("hello");

/* 
    //  readyState
    0 : request not initialized (request başlatılmadı)
    1 : server connection established (server connection sağlandı)
    2 : request received (request alındı)
    3 : processing request ()
    4 : request finished and response is ready () 

    // status 
    200 : "ok"
    403 : "Forbidden"
    404 : "Not Found"

*/

// responseTExt , responseXml