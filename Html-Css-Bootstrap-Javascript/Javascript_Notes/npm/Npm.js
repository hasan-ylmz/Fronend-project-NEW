// Npm init = >normal json file
// Bu komut size bazı sorular soracaktır bu sorduğu sorular karşısında bir json dosyası oluşturacaktır.

// npm init --yes (Dosya oluşturmada çok daha kolayı)
// Bu komut size direkt olarak bir json dosyası oluşturacaktır. Bütün sorulara evet cevabı verdiğiniz bir dosya .

// npm list -g  = Tüm global npm paketlerini listeler.Paketteki bütün dosyaları da listeler .
// npm list -g --depth 0 = Global npm paketlerinin klasör isimlerini gösterir .
// 4.25.1 = major.minor.patch

var _ = require("underscore");
var numbers = ([5, 4, 3, 2, 1]);
console.log(_.first(numbers));