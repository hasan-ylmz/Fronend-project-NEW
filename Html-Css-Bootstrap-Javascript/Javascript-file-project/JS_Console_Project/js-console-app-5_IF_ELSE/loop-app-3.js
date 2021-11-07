/*

    if-else login algorithms 

    login kontrolü : Kullanıcı adı ve parola kontrolünden geçene kadar kullanıcı bilgilerini kullanıcıdan isteyin .

    username = ahmet 
    password = 12345

*/



var k_username = "ahmet";
var K_password = 12345;
var  login = false;

while(login==false){

    var username = prompt("Enter your username");
    var password = prompt("Enter your password");

    if(k_username==username && K_password==password){
        console.log("Kullanıcı tanımlandı . ")
        login=true;
    }else {
        console.log("Kullanıcı adı veya parola hatalı ");
    }
}
