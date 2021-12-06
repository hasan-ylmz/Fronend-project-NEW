
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

