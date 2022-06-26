// RestApı HttpGet
// Request , response( json,xml), SERVİCE(web api ,external api);

document.querySelector("#getOne").addEventListener("click",getOne);

function getOne(){
    var url = "https://jsonplaceholder.typicode.com/posts;" 
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);   
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
    }
    
    xhr.send(); 
}

function getAll(){

}