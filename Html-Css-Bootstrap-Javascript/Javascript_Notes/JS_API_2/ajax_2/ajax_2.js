/* Json */

function displayCountry(country){
    const request = new XMLHttpRequest();
    request.open("get","https://restcountries.com/v3.1/name/"+country);
    request.send();

    request.addEventListener("load",JsonFunction)

    function JsonFunction(){
    // String to json
        const data = JSON.parse(this.responseText);
        console.log(data[0]);
        setCountry(data[0]);
    }
}

function setCountry(data){
    const html = 
     `       
        <div class="col-3">
            <div class="card h-100">
            <img src="${data.flags.png}" alt="" class="img-top">
            <div class="card-body">
                <h5 class="card-title">Name : ${data.name.common}</h5>
                <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Capital : ${data.capital}</li>
                <li class="list-group-item">Language : ${Object.values(data.languages)}</li>
                <li class="list-group-item">Population : ${data.population}</li>
                <li class="list-group-item">Region : ${data.region}</li>
            </ul>
        </div>
     </div>
    `
    document.querySelector(".container .row").insertAdjacentHTML("beforeend",html)
};

displayCountry("poland");
displayCountry("turkey");
displayCountry("United States");