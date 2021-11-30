let val;
let list  = document.querySelector(".list-group");
val =list;


/*
TEXTNODE = Satır aralıklarını  temsil eden bir değerdir .
Her element arasında bir textnode vardır 
*/
val = list.childNodes; // textnode var 
val = list.childNodes[2];
val = list.childNodes[2].nodeName;  // Nodename 
val = list.childNodes[2].nodeType   // Nodetype
val = list.childNodes[2].nodeType

/*
    ## NODETYPE ##
    
    If the node is an element node, the nodeType property will return 1.

    If the node is an attribute node, the nodeType property will return 2.

    If the node is a text node, the nodeType property will return 3.

    If the node is a comment node, the nodeType property will return 8.

*/

val= list.children;
val = list.children[2];
val = list.children[2].textContent = "new item";
val = list.children[2].children;

val = list.firstChild; // ilk node
val = list.lastChild

val = list.firstElementChild; // ilk element
val = list.lastElementChild;

val = list.childElementCount; // Ulaşılan liste elemanının kaç atane lste elemanı olduğuna bakabiliriz .


vaL = list.parentNode;
val = list.parentElement;


// ParentEelment 'in ParentElement' ini alıyoruz .
val = list.parentElement.parentElement


// - nextsibling -

val = list.children[2].nextSibling;  
val  = list.children[3].nextElementSibling;


// - Previoussibling - 
val = list.children[3].previousSibling;
val = list.children[3].previousElementSibling;


console.log(val);

for(let i=0;i<list.childNodes.length;i++){
    if(list.childNodes[i].nodeType===3){
        console.log(list.childNodes[i]);
    }
    
}

// children seçilirse textnodelar işin içine katılmıyor ,sadece elementler  katılıyor .
// val = list.children; // textnode yok 

