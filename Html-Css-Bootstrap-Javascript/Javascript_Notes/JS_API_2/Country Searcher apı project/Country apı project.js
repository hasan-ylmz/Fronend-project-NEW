// Demo Callback

document.querySelector("#btnSearch").addEventListener("click", () => {
    let text = document.querySelector("#txtSearch").value;
    getCountry(text);
    
})

function getCountry(country){
    const request = new XMLHttpRequest();
    
    request.open("get","https://restcountries.com/v3.1/name/"+country);
    request.send();

    request.addEventListener("load",JsonFunction)

    function JsonFunction(){
    // Json turn js object 
        const data = JSON.parse(this.responseText);
        renderCountry(data[0]);


        const countries =(data[0].borders.toString());


        // load neighbour
        const req = new XMLHttpRequest();
        req.open("get","https://restcountries.com/v3.1/alpha?codes=" + countries);
        req.send()
        
        req.addEventListener("load",function(){
            const data = JSON.parse(this.responseText);
            renderNeighbour(data);
        })

        
    }
}

function renderCountry(data){
    
    let html= `
    <div class="card-header">
    Search result 
    </div>
    <div class="card-body">
        <div class="row">
        <div class="col-4">
            <img src="${data.flags.png}" alt="country flag picture" class="card-img-top">
        </div>
        <div class="col-8">
                <h3 class="card-title">${data.name.common}</h3>
                <hr>
                <div class="row">
                    <div class="col-4">Country capital  : </div>
                    <div class="col-8">${data.capital}</div>
                </div>
                <div class="row">
                    <div class="col-4">Populatıon : </div>
                    <div class="col-8">${data.population}</div>
                </div>
                <div class="row">
                    <div class="col-4">Region : </div>
                    <div class="col-8">${data.region}  </div>
                </div>
                <div class="row">
                    <div class="col-4">Currencies : </div>
                    <div class="col-8">${data.region} </div>
                </div>
            </div>
        </div>
    </div>
    `;
    document.querySelector("#country-result").innerHTML = html;
    
    
};

function renderNeighbour(data){
    let html = "";
    for(let country of data){
        html += `
        <div class="col-2 mt-2">
            <div class="card">
                <img src="${country.flags.png}" class="card-img-top">
                <div class="card-body">
                    <h6 class="card-title">${country.name.common}</h6>
                </div>
            </div>
        </div>
        `;
        
    }
    document.querySelector("#neighbors").innerHTML = html;
}


