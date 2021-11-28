// DEMO FUNCTİONS 

/*
    - Basit bir bankamatik uygulaması -
    Kullanıcının çekmek istediği para hesabında var ise parayı çekebilsin  .

    Eğer para yetersizse ek hesap kontrol edilsin .
    Ek hesapla birlikete yeteri kadar para varsa para verilsin .

    

 */

var hesapA ={
    ad: "XYZ",
    hesapNo: "11111111111",
    bakiye: 5000,
    ekHesap : 4000,
} 

var hesapB ={
    ad:"IOT",
    hesapNo:"22222222222",
    bakiye:6000,
    ekHesap:5000,
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);
    
    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye.miktar;
        console.log("Paranızı alabilirsiniz");
    }else {
        var toplam =hesap.bakiye + hesap.ekHesap;

        if(toplam >= miktar){
            if(confirm("Ek hesabınızı kullanmak  ister   misiniz  ? ")){
                console.log("Paranızı alabilirsiniz ");
                var bakiye = hesap.bakiye;
                var ekHesap = miktar-bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap =hesap-ekHesap ; 
            }else {
                console.log(`${hesap.hesapNo} numaralı  hesabınızda ${miktar} bulunmamaktadır .`)
            }
                
        }else {
            console.log("Bakiye yetersiz ")
        }
    }
}
console.log(paraCek(hesapB, 11000))



/*
    -Ders notu -

    Obje bilgisini değerlerini fonksiyon içerisinden değiştiriyoruz . Değiştirilmiş obje karşımıza geliyor .
    Fonksiyona bir kopyasını değil oraya adresini gönderiyoruz.  Örnekverilirse a bakiyesindeki adı değiştir .
    Asıl adreste de hesap bilgisi değişmiş olur .

    Bir değişken olarak hesaplasaydık, fonksiyona o bilgiyi gönderirsek oradaki bir bilginin bir kopyasını göndermiş olur .
    Herhangi bir değişiklik yapılmak istenirse hesap bilgisi kopyası değiştirilmiş olur .   Fonskiyonda sadece kopya değiştimek  orjinalinde hiçbir değişiklik olmaz 

    Objelerde a adresini nereden güncelleme yaparsak yapalım .O bilgi oradan değişmiş olur .

    primitivelar value type oluyor .
    Primitive type harici her şey reference type  oluyor .


 */