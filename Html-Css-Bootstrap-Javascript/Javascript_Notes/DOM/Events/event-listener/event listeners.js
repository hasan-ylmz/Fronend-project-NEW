// Event listeners

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#delete-1");
/*
    - AddeventListener -
    Kullanıcı mouse ile event'ın üzerine geldiği zaman mı yoksa üzerinde durduğu zaman mı kullanılır ?  
    Kullanıcı bu html elemenı üzerinde duruduğu zaman tepkisi nasıl olacak bunu anlayıp işlenm ypabilmek için kullanıyoruz . 
    İlk önce yaplacak olan işlemi daha sonra bu işlemin hangi parametereye göre  yapılacağı belirlenir . 

    - Dışarıdan fonksiyon almak -
    Event içinde fonksiyon belirleyip daha sonra işlem yapıyorduk .Bunun yerine dışarıdan fonksiyon parametresi alınıp işlem yapılabilir mi ? 
    Evet yapılabilr. 
    Buna neden ihtiyaç duyulur ? 
    Fonksiyonu herhangi  başka bir event içinde kullanabilirsiniz .  



// btn.addEventListener("click",function(){
//     console.log("btn clicked")
// });


// İlk butona ikinci fonksiyon da atanabilir .Bir butona iki click olayı atanabilir . İlk iki  event 
btn.addEventListener("click",btnClick);
btn.addEventListener("click",btnClick2)
btn2.addEventListener("click",btnClick);


// - Event dışından fonksiyon alma -
function btnClick(){
    console.log("btn clicked")
}

function btnClick2(){
    console.log("delete-1 clicked")
}


*/

// ** REFRESH 
/*

    - PreventDefault -
    A etiketine her batığımızda sayfa yenileniyor ve scrollbar yukarı çıkyor . 
    A etiketine herhnagi bir değer atanmadı fakat başka bir sayfaya gitmek istediği için sayfa yenileniyor .
    Peki bunu nasıl önüne geçebiliriz ? 
    Event'ta bulunan fonskiyon içine bir  event parametresi belirlenecek .
    Daha sonra bu parametreye ulaşılıp preventDefault özelliğini kullanacağız . 

*/

btn.addEventListener("click",function(e){
    console.log("btn clicked");
    e.preventDefault();
})

// EVENT FEATURES 
btn.addEventListener("click",function(e){
    
    let val;
    val = e
    val = e.target
    val = e.target.id
    val = e.target.classList;
    val = e.type

    console.log(val)
})
