
const taskList = document.querySelector("#task-list");

// ** Removing element 
// // taskList.remove();
// taskList.childNodes[1];

//  // Tasklist'te childnode'dan indeks numarası ile eleman silinebilir .  0) textnode  1)  1.liste elemanı  2) textnode
// taskList.childNodes[1].remove();


// // Childnode yerine direkt childrenlar üzreinden silinebiiliyor . Childnode' a göre indekslemesi daha kolaydır  .
// taskList.children[0].remove;

// // Ulaştığınız nesneyi remove ile  silebiliyorsunuz veya removeChild metodu ile ulaştığınız nesnenin alt elemanlarını silebiliyorsunuz . 
// taskList.removeChild(taskList.children[1])

// ** Remove attributes 
// taskList.children[0].removeAttribute("class")

// for(let i=0;i<taskList.children.length; i++ ){
//     taskList.children[i].removeAttribute("class")
// }

// ** Replacing element 

const cardHeader = document.querySelector(".card-header");

// Create element 
// const h3 = document.createElement("h3");
// h3.setAttribute("class","card-header");
// h3.appendChild(document.createTextNode("My list "));

// const parent= document.querySelector(".card");
// parent.replaceChild(h3,cardHeader);


// ** Classes 


let val ; 
link = taskList.children[0].children[0];
/*

val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList.length;
val = link.classList[1];

// ClassList add a new class
link.classList.add("new-item")

// Classlist remove a class
link.classList.remove("new")

    Li etiketinin altındaki a etiketine ulaşıp a etiketinin class 'ını alıyouz .

    - ClassList -
    Classların bulunduğu bir liste getirilir .

    - ClassName ve ClassList arasındaki  fark - 
    ClassName , classlar bir string değeri olarak getirilir .
    ClassList , bir dizi içerisinde getirilir. 

*/

// ** Attributes

val = link.getAttribute("class");
val =link.setAttribute("href","xyz.com");
val = link.getAttribute("href");
val = link.getAttribute("id")
// Attribute değerine herhangi bir atama yapılıp yapılmadığını anlamamızı sağlar .
val = link.hasAttribute("href");
val = link.hasAttribute("data-id");
 

console.log(cardHeader)
console.log(taskList);
console.log(val)





 








































/*
const taskList = document.querySelector("#task-list") 

// ** Removing element 
/*

    taskList.remove();

    // Tasklist'te childnode'dan indeks numarası ile eleman silinebilir .  0) textnode  1)  1.liste elemanı  2) textnode 
    taskList.childNodes[1].remove;

    // Childnode seçmek  yerine children ile direkt silinebilir .
    // Textnodelar olmadığı için  indeksler arası seçim yapmak daha kolay oluyor . 
    taskList.children[0].remove

    // Ulaştığınız nesneyi removeChild ile silebiliyorsnuz veya ulaştığınız nesnenin  removeChild ile nesnenin alt elemanlarını silebiliyorsunuz .
    taskList.removeChild(taskList.children[2]);



// ** Removing attributes 
taskList.children[0].removeAttribute("class");

for(let i=0; i<taskList.children.length; i++){
    console.log(taskList.children[i].removeAttribute("class"))
}




/* yorum satırı 
const taskList = document.querySelector("#task-list");


// ** removing element
// taskList.remove();

// taskist'te childnode 'dan ilk elemman silinebilir . 0 -textnode 1- 1.liste elemanı 2- textnode
taskList.childNodes[1].remove


Bu metod yerine children ile direkt silinebilir.
taskList.children[0].remove;
TextNodelar olmadığğı için indekslemesi daha kolay olur .
 

// Ulaştığınız nesneyi remove childe metodu ile silebiliyorsunuz veya removechild metodu ile ulastığınız nesnenin alt elmeanlarını silebiliyorsunuz .

taskList.removeChild(taskList.children[3])
//  **  replacaing element  


    const cardHeader = document.querySelector(".card-header");
console.log(cardHeader);

// create element 
const h2 =document.createElement("h2");
h2.setAttribute("class","card-hedaer");
h2.appendChild(document.createTextNode("My list "));





console.log(taskList)


*/




























