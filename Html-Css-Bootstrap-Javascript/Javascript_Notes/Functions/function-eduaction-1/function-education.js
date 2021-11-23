// educatıon 

/*

    function topla(a,b){
        return a+b;
    }

    var sonuc  = topla(10,20);



    Fonksiyonu bir kere tanımlıyoruz . Fakat birçok yerde fonksiyonu kullanabliriz .
     
    Fonksiyon , herhnagi  bir değişken içine aktarılabilir . Veya değişekn içine tanımlamadan direkt console ' yazdırabiliriz .
    
    //  console.log(topla(20,20));

*/

// Örnek -1

function yasHesapla(birthday){
    return 2021-birthday
}

let age_ada = yasHesapla(1998);
let age_ahmet = yasHesapla(2001);
let age_sibel = yasHesapla(2005);


console.log(age_sibel);



// Örnek-2 

function emeklilik(birthday,isim){
    var k_yas = yasHesapla(birthday);
    var emeklilik = 65-k_yas ;


    if(emeklilik>0){
        console.log(`${isim}  emekli olmanıza ${emeklilik} yıl kaldı`);
    }
    else{
        console.log(`${isim} zaten emekli oldunuz .`)
    }
}

emeklilik(1920, "Harun");
emeklilik(1998," Didem ");



