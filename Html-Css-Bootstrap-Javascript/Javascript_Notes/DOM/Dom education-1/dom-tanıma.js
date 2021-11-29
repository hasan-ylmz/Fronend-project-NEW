// DOM 

let val;

val = window.document;


// Sayfa üzerindeki bütün elemanları yazdırır .
val = document.all;
val = document.all.length;
val = document.all[2]


// Linkleri almak için kullanılır .
val = document.anchors;

// ------------------------------------------------------------
val = document.URL;
val = document.images;
val= document.title;
val = document.forms;
val = document.forms[9];
val = document.forms[2].method;
val = document.forms[2].id;
val =document.forms[3].action;
val = document.scripts;
val = document.scripts[2];
val = document.scripts[2].getAttribute("src");



console.log(val);