/*
    // Local storage nedir ? 

    Web depolama API’si iki mekanizmadan oluşur: session storage ve local storage. Bu iki mekanizmada, sayfa oturumu süresince kullanılabilir her kaynak için ayrı bir depolama alanı sağlar ve farklı durumlarla başa çıkmak için kullanılırlar. 
    Peki tam olarak nedir bu local storage ve session storage?

    Local Storage: JavaScript sitelerinin ve uygulamalarının son kullanma tarihi olmadan, bir web tarayıcısında key/value değerlerinin kaydedebilmesine izin veren bir özelliktir.
    Session Storage: Bir web tarayıcısında key/value değerlerini yalnızca bir oturum süresi için tarayıcıya kaydedebilmesine izin veren bir özelliktir. Yani tarayıcı sekmesi kapatıldığında veriler de kaybolur.
    Yukarıdaki tanımlarda da gördüğümüz gibi iki mekanizma da depolama alanı sağlar. Aralarındaki en büyük fark ise session storage yalnızca tarayıcı açıkken (sayfa yeniden yüklendiğindeki veya geri yüklendiğindeki durumlar dahil olmak üzere) bir depolama alanı sağlarken local storage tarayıcı kapatıldıktan sonra da verileri depolamaya devam eder.
    Session storage kullanıcının tek bir işlem gerçekleştirdiği, ancak aynı anda farklı pencerelerde birden çok işlem gerçekleştirebileceği senaryolar için tasarlanmıştır. 
    Bu penceredeyken açılan aynı siteye ait birçok sayfada erişilebilirdir ve pencere kapattıldığında ise kendini temizler. Bu sayede üçüncü tarafların verilere erişmesi de zorlaşır.
    Local storage, birden çok pencereye yayılan ve geçerli oturumun ötesinde süren depolama için tasarlanmıştır. Özellikle, Web uygulamaları, performans nedeniyle client tarafında kullanıcıya ait veriyi local storage sayesinde saklayabilirler ve çerezlerin aksine daha çok veri depolayabilirler.
    Ayrıca local storage kullanımı ile çerez kullandığımızda her istekte sunucuya gidip gelen verilerin yarattığı ağır yük ortadan kalkmış, hız ve performans yükselmiş oldu.



    Kaynak :  " https://engineering.teknasyon.com/local-storage-ve-session-storage-nedir-7d913a6b5651#:~:text=Local%20Storage%3A%20JavaScript%20sitelerinin%20ve,kaydedebilmesine%20izin%20veren%20bir%20özelliktir.&text=Local%20storage%2C%20birden%20çok%20pencereye,ötesinde%20süren%20depolama%20için%20tasarlanmıştır.  "
*/

// Local storage 
let val;

// Set ıtem
// 1.key atanacak değer atayacağın değer firstname =sadık gibi
const firstName = localStorage.setItem("firstName","Sadık ")
const lastName = localStorage.setItem("lastName","Turan ")

let hobbies =[ "reading a book" ,"swim"]

// get ıtem 
val = localStorage.getItem("firstName")

// Remove ıtem
// localStorage.removeItem("firstName")


// Clear  = Bütün elemanları  silmek için kullanılır .
// localStorage.clear()


// Set array to item
// -Json stringify = Normal string bilgiyi bir obje olarak yazdırmak istersek bu metodu kullanacağız 
localStorage.setItem("hobbies",JSON.stringify(hobbies));

// Diziyi objeye çevirme kısmı 
val = JSON.parse(localStorage.getItem("hobbies"))

console.log(localStorage);
console.log(val);



// Session storage 
// // const city = sessionStorage.setItem("city","Kocaeli");

// // const country = sessionStorage.setItem("country","Turkey")


// // console.log(localStorage);


