// ***  Create element 

const li = document.createElement("li");

// Add class 
li.className= "list-group-item list-group-item-secondary"

//  Add id 
li.id= "first-list-element"

// Attribute
// Setattribute' da ilk önce değiştirmek istediğin kısmı daha sonra değişecek değer yazılır .  -ÖR a.setattributes("href","#") 

li.setAttribute("title","new item");
li.setAttribute("data-id","32");


// text node 
const text = document.createTextNode("new item");

// Text etiketini li ile ilişkilendirmemiz gerekiyor . Text etiketini li etiketinin bir alt elemanı olarak ekliyoruz . 
li.appendChild(text);


// append a to li
// Li elemanı oluşturuldu ve a li' nin alt öğesi  olarak tanmlandı . 

const a = document.createElement("a");
a.setAttribute("href","#")
a.className="delete-item float-right";
a.innerHTML = "<i class='fas fa-times'></i>"
li.appendChild(a);

// append li to ul 
document.querySelector("#task-list").appendChild(li);

/*

    - Ders notu -
    
    CreateElement ile bir li  etiketi oluşturuyoruz . Class ekleyip attribute 'ını değiştirebiliyoruz .
    Daha sonra bir text node oluşturulup li elemenı içine eklendi(appendChild  ile ). Bir a etiketi oluşturuldu . 
    A etiketine class ve attribute değerleri tanımlandı .  A etiketi içine innerHTML ile bir icon eitketi oluşturuldu . 
    Daha sonra a etiketi li'nin bir alt öğesi olarak tanımlandı . Tasklist seçildi ve li etiketi  ul etiketinin bir alt öğesi olarak tanımlandı .

*/