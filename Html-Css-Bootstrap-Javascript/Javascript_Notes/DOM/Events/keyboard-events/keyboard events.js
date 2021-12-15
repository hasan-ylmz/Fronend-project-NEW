const input = document.querySelector("#txtTaskName");
const form =document.querySelector("form")
const select = document.querySelector("#select")

// input.addEventListener("keydown",eventHandler);
// input.addEventListener("keyup",eventHandler);
// input.addEventListener("keypress",eventHandler);
// input.addEventListener("focus",eventHandler);
// input.addEventListener("blur",eventHandler)
// input.addEventListener("cut",eventHandler)
// input.addEventListener("paste",eventHandler)
// input.addEventListener("select",eventHandler)
// form.addEventListener("submit",eventHandler )

select.addEventListener("change",eventHandler)

function eventHandler(e){
     console.log("event  type  " + e.type )
    // console.log("key code "+e.keyCode)
    
    // Hangi tuşa basıldığını görebilmek için kullanılır 
    // Alternatifi keypress 'dir 
     console.log(" Value : "+ e.target.value)


    
    // e.target.style.backgroundColor ="yellow"
    // e.target.style.backgroundColor ="blue"

    e.preventDefault();
}








/*

    DOCUMENTATION
    
    ## INPUT ## 
    - Key down = Tuşa basıldığı anda gerçekleşir .
    - Key up  = Tuştan elimizi kaldırdığımız anda gerçekleşir .
    (Key code ile hamgi tuşa basılıdığını bulabiliriz .)
    - Key press  
    - Focus 
    - Blur =  Mouse ile focus dışına çıkılınca gerçekleşen olaydır .
    - Cut  = 
    - Paste 
    - Select = Fare ile seçilince gerçekleşir 

    ##  Form  ## 
    - Submıt 
    
    ID = "Select"
    - Change  

*/


