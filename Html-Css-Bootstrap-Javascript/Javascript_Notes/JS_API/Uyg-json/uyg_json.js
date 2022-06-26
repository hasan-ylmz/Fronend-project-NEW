// DEmo_json
document.querySelector("#getEmployee").addEventListener("click",loadEmployee);

function loadEmployee(){
    const xhr =new XMLHttpRequest();
    xhr.open("GET","musteri.json",true);
    
    xhr.onload = function(){
        if(this.status === 200){
            let employees = JSON.parse(this.responseText);

            let html;

            employees.forEach( employees => {
                html+=` 
                <table class="table table-bordered table-stripped  mt-3">                   
                    <tr>
                        <td> ${employees.firstName} </td>
                        <td> ${employees.lastName}</td>
                        <td> ${employees.age}</td>
                        <td> ${employees.retired}</td>
                    </tr>
                </table>
                    `;
                    document.querySelector("#employees").innerHTML = html;    
            });
        }    
    }
    
    xhr.send();
}
















/* 
                    <tr>
                        <td> ${employees.firstName} </td>
                        <td> ${employees.lastName}</td>
                        <td> ${employees.age}</td>
                        <td> ${employees.retired}</td>
                    </tr>`;

*/