// Döngüler 

// ** For döngüsü 


/*
    if(i%2==0){
        console.log(i)
    } 

    **  For döngüsü içinde gelen sayıların çift olup olmadığını kontrol edebiliriz .
        if(i%2==1) tekler için if(i%2==0) çiftler için 
    

    for(var i=1; i<=100; i++){
            if(i===51){
                break;
            }
        console.log(i);
    }

    **  Yukarıdaki örnekte for döngüsü içinde 50 sayısına geldiğinde break ile for döngüsünü durduruyoruz.
        Eğer devam etmesini istersek break yerine continue kullanıyoruz . Aşağıdaki kod parçasında örneği gösterilmiştir .
        Continue kısmında 50 sayısına gelince döngünün ilk kısmı bitiyor .50 sayısını yazdırmayıp 51 sayısını yazdırarak döngünün 
        devamını yazdırmaya devam ediyor . 

    for(var i=1; i<=100; i++){
        if(i===51){
            continue;
        }
        console.log(i);
    }


    // BREAK CONTİNUE FARKI 
        Break sadece döngünün belli bir kısmına getirilip kesilmesini sağlar ;  continue  döngünün eşit oldğu kısıma kadar çalışır . Daha sonra ise döngünün 
        geri kalan kısmını devam ettirir.
        - ör -
        50 den sonra break yazınca sadece 50 'ye kadar olan kısım yazdırlır .
        continue deyince 0 dan başlayıp 50 ye kadar gelir 51den 100 e  kadar yazdırır .   

        */

        for(var i=1; i<=100; i++){
            if(i===51){
                continue;
            }
            console.log(i);
        }

    /* 
        
        for(var i=0; i<=10; i++){
            console.log(i)
        }


    **  Aşağıdaki  dizi içinde şehirleri for döngüsüyle yazdıralım. 
        Dizi içindeki şehirleri tek tek yazdırabilmek için conosle.log(city[i]) dememiz yeterli olacaktır .   

        var city = ["trabzon", "istanbul","sakarya","bodrum", " İzmir" , ""]

        for(var i=0; i<=city.length; i++){
            console.log(city[i])
        }


    */ 


    // ** WHİLE LOOP 

    /*

        Klasik bir while döngüsü 

        var i=1;
        while(i<=10){
            console.log(i);
            i++
        }

        var city = ["trabzon", "istanbul","sakarya","bodrum","izmir"]

        var i=0;

        while(i<city.length){
            console.log(city[i]);
            i++;
        }

    */

// made by HY