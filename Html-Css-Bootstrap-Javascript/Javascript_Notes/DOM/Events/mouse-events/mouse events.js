// MOUSE EVENTS 

const  btn = document.querySelector("#btnDeleteAll");
const ul = document.querySelector("#task-list");
const h5 = document.querySelector("h5")

/* 
// Click

btn.addEventListener("click",eventHandler);
ul.addEventListener("click",eventHandler);

*/

// Double Click 
btn.addEventListener("dblclick",eventHandler);

// Mouse Down 
btn.addEventListener("mousedown",eventHandler)

// Mouse Up 
ul.addEventListener("mouseup",eventHandler)


// Mouse Enter 
ul.addEventListener("mouseenter",eventHandler)


// Mouse leave 
ul.addEventListener("mouseleave", eventHandler)

// Mouse over 
ul.addEventListener("mouseover",eventHandler);

// Mouse Out 
ul.addEventListener("mouseover",eventHandler);

// Mouse MOve
ul.addEventListener("mousemove",eventHandler2);


function eventHandler(event){
    console.log(`event type : ${event.type}`)
}

function eventHandler2(event){
    h5.textContent = `Mouse X : +${event.offsetX} Mouse Y : ${event.offsetY}   `
}



/*

    DOCUMENTATION 
    
    - Click
    - Double Click (dblclick)
    - Mouse Down  = Mouse butonuna tıkladığınız an gerçekleşir . Mouse'u tıklayıp butondan kaldırmadan yapılan event .  
    - Mouse Up    =  Mouse butonuna tıklayıp bıraktığımız an mouse up olayı gerçekleşir .
    - Mouse Enter = Belirli bir koordinat içine giriş yapıldığında event tetiklenir 
    - Mosue Leave = Belirli olan koordinattan çıkıldığında tetiklenen olaydır .
    - Mouse over  = Seçilen nesnenin çerçevesine girilince çalışır . -ÖR (Ul nesnesinin bulunduğu çerçeveye tıklama )
    - Mouse Out   =  Seçilen nesne çerçevesinin dışına çıkınca gerçekleşir .
    - Mouse Move = Mouse hareketidir . -ÖR Mouse hareketi ile bir resim koordinatı üzerinde işlem yapılabilir 


    Mouse Out ve Mouse leave   arasındaki fark nedir ? 
    - ÖR 
    Li nesnesi üzerindeyken mouse over gerçekleşti . Lİ nesnesinde başka bir eleman geçiş yapılınca mouse out da çalışır .
    Mouse leave çalışmaz . Çünkü hala li elemanının alt elemaının  üstündeyiz  .
    Nesnelerin alt elemanların da mouse over mouse out çalışır  . 
*/