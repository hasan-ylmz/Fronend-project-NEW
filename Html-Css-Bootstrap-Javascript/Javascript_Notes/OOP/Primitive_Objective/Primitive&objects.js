// Primitive & objective 
// Primitive tipler ile objective tipler arasındaki farklara bakacağız .

var  a=10;
var b=a;

console.log(a);
console.log(b);

var obj1 = {
    name: "burak",
    age:18
}


// 
var obj2 = obj1;
obj1.age= 19;


console.log(obj1.age);
console.log(obj2.age);


/*
    Stack               Heap 
    A =10;              adres1 = {
                            age:10,
                            name:"Ada"
                        }
    B=10;

    obj1= adres1;
    obj2= adrs1;

    Primitve tiplerde herhangi bir atama işlemi yapıldığı anda a değişkenine 10 atandı .B değişkenine de 10 değeri atandı .
    A veya b değişkeninde değişim diğerini etkilemiyor .  Veriler ayrı yerde tutuluyor .
    
    Stack kısmındaki değişiklikler 

    Obj1 ,0bj2  isimli 2 obje  tanımlanıyor .Ama obje içinde tutulacak veri burada bulunmuyor  .Sadece adres bilgileri tutuluyor .
    Adres bilgisine karşılık gelen bilgi de heap bölgesinde tutluyor .
    Aslında obj1 ve obj2 arasındaki eşitleme aslında adres eşitlemesi.
    Obj1 veya obj2de yapılacak herhangi bir değişiklik adres bölgesindeki değerlerde değişiklik yapılıyor.

*/

var num =50;
var account ={
    name:"yiğit",
    accountNumber:"123456" 
}

function upadte(a,b){
    a=100;
    b.accountNumber="222222";
}

upadte(num,account);

/*
    Yeni bir değişkena atansa da num değeri  hala 50'dir .
     Fonksiyona gönderilen primitive tip a yerine geçiyor .Num ile a değişkeni farklı bölgelerde tutulan farklı değişkenler oluyor .
    Num gönderildiği zaman functionda kopyası oluşturuluyor .(Gönderilen değerin kopyası oluşturma )
    Yukarıdaki num değişkenine 100 değeri atansa da veriler farklı bölgelerde tutuluyor. 
    Bu yüzden fonksiyon içinde değiştirilen değer aslında num değişkeninşn kopyasıdır .Bu yüzden num yazdırılınca 50 sonucu alınır .

    Function içindeki a değişkeninde sadece değer ataması var. Farklı alandaki değerim değiştirmiş oluyorum.
    a 'nın num ile bir alakası yok .

    **************************
    Fakat iş objelere gelince değişiyor .
    B' de yeni verisi  olan bir obje oluşturulmayacak.B'deki obje tamamen gelip account adresini  alacak .
    B ile alakalı yapılacak herhangi bir değişiklik accountla  ilgili olacak. 
    Account'un adresini b yerine atamak demek.

    İkisi de  aynı adresi temsil ediyor .Adreslerde tutulan  veride  yapılan herhangi  bir değişiklik diğer objeyi de etkilyecektir.
    */ 
console.log(num);
console.log(account);

/*
    /////  Referans türlere ve objective tiplere neden ihtiyaç duyarız ? 
    Diyelim ki 100.000 tane ürünümüz var . Products adında 100.000 tane ürün taşıyan bir objeyi functiona value olarak gönderilmiş olursa ürünlerin kopyası gönderilmiş olur .
    Hem asıl kaydı tutan obje hem de prd  ismindeki objede ürün kayıt kopyası tutulacaktı .
    Prd üzerinde yapılacak herhangi bir değişiklik  fonskiyonda işlenip tekrar products objesine gönderilmesi gerekir .
    İşlemlerin böyle olması pek sağlıklı oLmaz . Onun yerine orijinal liste üzerinden işlem yapılmasını isteriz . 
    Peki nasıl olacak ? 
    Orijinal liste  adresini prd üzerinde gönder . Prd üzerindeki her değişiklik prd adrsindeki obje üzerinde yapılsın .Veri kirliliği olmayacak . 
*/
var products = [ 
    {name: "Product name", price:1000},
    {name: "Product name", price:1000},    
    {name: "Product name", price:1000},
    {name: "Product name", price:1000},
    {name: "Product name", price:1000},
]

function FilterProducts(prd){

}

FilterProducts(products);