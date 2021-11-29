// Selecting Element 

// ** Single element 
// ***      document.getElementById()
// ***      document.querySelector()


// ** Multiple element

// class name 
// document.getElementByClassName()


let val;
val = document.getElementsByClassName("list-group-item");


/*
    getElementByClassName ile htmlCollection ' dan tek elemanı nasıl seçeceğiz  ? 
    İndeks numarası ile bu işlemi yapabiliriz .
    
    // val = document.getElementsByClassName("list-group-item")[2];

    Direkt document yazmak  yerine ulaştığımız collection üzerinden de işlem yapabiliriz .
    Tekrar elemanı seçip indeks numarası üzreinden gitmektense ,seçtiğimiz eleman üzerinden direkt indeks numarası ile seçim yapabiliriz . -ÖR
    val =val[2];

*/

//  STYLE AND CONTENT

/*

val[0].style.color ="red";
 val[2].textContent=" NEW İTEM";


// Bütün nesnelere ulaşmak  istersek  ;Foreach metodu olmadığı için for döngüsü yazıp nesnelere ulaşırız .
 // Ulaşılan  nesnelerin style özelliğini değiştirebiliriz . 

for(let i=0;i<val.length;i++){
    console.log(val[i].style.color="blue")
    // console.log(val[i].textContent="new item");
};

*/


// *** document.getElmentByTagName() 

val = document.getElementsByTagName("li");
val = document.getElementsByTagName("a");

    /*
    
    Bazen karmaşık seçimler yapmamız gerekibilir . Bütün a etiketlerini seçmek yerine bir liste içidneki a etiketlerini seçmek isteyebiliriz . İşte tam bu anda şu yöntem devreye giriyor :
    Hedef ID seçilip , seçilen id üzerinden bir tagname seçiliyor .Böylece spesifik seçimleri rahatlıkla yapabiliyoruz .

    */


// val = document.getElementById("task-list")
// val =val.getElementsByTagName("a");   

// //-  Alterenatif yol - 
// val =document.getElementById("task-list").getElementsByTagName("a");



// Document.querySelectorAll()
/*

    val = document.querySelectorAll("li");

    val.forEach(function(item,index){
        item.textContent=`${index} -  Suprise suprise , king is back `
    })

*/


val =document.querySelectorAll("li:nth-child(odd)");

val.forEach(function(item){
    item.style.background ="#bbb"
})

// val =document.querySelectorAll("li:nth-child(even)")

console.log(val);

/*

    - getElementById() vs QuerySelector - 
  
    getElement ile başlayan metodları kullandığımızda elimize gelen bir HtmlCollection 'dır .
    HtmlCollection ' da forEach metodu kullanılamıyor sadece for döngüsünde  indeks ile kullanma imkanımız var.
    
    querySelector kullanıdğımızda karşımıza Nodelist geliyor .NodeList ile forEach metodu da geliyor .
    Başka döngüler de kullanılabilecek  olmasına rağmen forEach kullanılmasının sebebi forEach'de bir kontroll değişkeni tanımlanması  gerekmiyor .
    
*/

