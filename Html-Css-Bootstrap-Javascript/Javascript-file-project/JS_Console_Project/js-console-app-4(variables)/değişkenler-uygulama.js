/* 
 
    Bir öğrencinin bilgilerini alıp notunu hesaplayan programı yapın. 

    ** Ad giriniz (ad)
    ** Numara giriniz (ogrno)
    ** Cinsiyet giriniz (cinsiyet)
    ** Ders adı giriniz (ders)
    ** 1.yazılı notu (not 1)
    ** 2. yazılı notu (not 2 )
    ** ortalama hesapla ve console '  a yazdır. 

*/

var firstName;
var lastName;
var studentNumber;
var gender;
var firstExam;
var lastExam;
var average;

firstName= prompt(" İsminizi giriniz : ");
lastName = prompt(" Soyadınızı giriniz : "); 
gender = prompt(" Cinsiyeiniz : ")
studentNumber = prompt (" Öğrenci numaranızı giriniz = ");
firstExam = prompt(" İlk sınav notunuzu giriniz : ");
lastExam =prompt(" Son sınavınızı giriniz : " )


examTotal = (Number(firstExam) +  Number(lastExam))/ 2;
console.log("Adınız " ,firstName , "Soyadınız ",  lastName , "Cinsiyetiniz : ", gender , "Öğrenci numaranız : ", studentNumber , " ilk sınav notunuz : " , firstExam , " son sınav notunuz : ", lastExam , "Ortalamanız : ", examTotal );


/*

    - Yazılırken  dikkat edilmesi  gereken kısım ve hata alınmasına sebep olan kısım - 

    Notu direkt string olarak birleştirdi . Bu da not ortalamasının yüksek çıkmasına sebep oldu.
    ör - 6070 /2 
    SONUÇ 3035 olur.
    Bu şekilde yazılmasını istemiyorsak string ifadeleri ilk önce sayısal değere çevireceğiz . Daha sonrasında ise işlemi yapacağız .
    Bunu number() şeklinde yazarak yapabilirsiniz .  
*/