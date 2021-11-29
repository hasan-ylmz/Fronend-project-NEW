// selecting element 


// *** Single element 

/*
        // --- document.getElementById ---

        let val ;

        val = document.getElementById("txtTaskName");
        val =document.getElementById("header");
        val =document.getElementById("header").id;
        val = document.getElementById("header").className;

        //  Eleman seçiminde her zaman document.getElementById kullanmak zorunda mıyız ? Hayır , bir eleman seçip val üzerinden de id değeri alınabilir .

        val = document.getElementById("header");
        //  val = val.id;
        // val = val.className;


        // --  STYLE  -- 

        val.style.fontSize = "2rem";
        val.style.color= "blue";
        val.style.fontWeight = "bold"
        // val.style.display ="none";


        // - InnerText - 
        val =  document.getElementById("header").innerText="FULLSTACK"


        // - InnerHtml -
        val = document.getElementById("header").innerHTML="<b>To do app</b> "

        // console.log(val);


        /*
            InnerText ve InnerHtml farkı nedir ? 
            Herhang bir etiket kullanıp düzenleme yapmak istedğimizde innerHtml etiketini kullanırız ki kullanılan eitket kullanıcı tarafından görülmesin .
            Diğer yazı işlerimiz için InnerText' i kullanabiliriz .
*/


// document.QuerySelector 

/*
    queryselector daha esnek bir seçim olanağı tanıyor .
    Seçilen idler # ile classlar . ile belirtilmek zorundalar .

*/

console.log(document.querySelector("#header"));
console.log(document.querySelector(".delete-item")); // Herhangi bir classa ait 2 tane eleman varsa ilk eleman seçilir .
console.log(document.querySelector("div"));

document.querySelector("li").style.color= "red"; // Burada da ilk li elemanı seçilir .

// İlk elemana style vermek istemezsek last-child , first-child, nth-child() yaradımıyla istediğimiz elemana style veriyoruz .

document.querySelector("li:last-child").style.color= "red";
document.querySelector("li:nth-child(3)").style.color= "red";
document.querySelector("li:nth-child(3)").textContent = "X" 


// -  ClassName - 

// Class eklemek istersek className 'i kullanıyoruz . - ÖR Arkaplan rengini değiştirmek istedğimizde class ekelyip değiştirebiliriz . ClassName'e hangi classlar eklendiyse o class geçerli olur .
document.querySelector("li").className="list-group-item list-group-item-danger"

// -  ClassList -

// Add ile classliste yeni bir class eklenebiliyor.
document.querySelector("li").classList.add("HY");
 


// *** Multiple element


