// synchronous
    
    console.log(1);
    console.log(2);
    console.log(3);

// asynchronous     

    console.log(1);
    setInterval(() => {
        console.log(2);
    },2000);
    console.log(3);


    document.getElementById("MISSION").addEventListener("click", CLickFunction);

    function CLickFunction(){
        console.log("MISSION COMPLETED");
    }



// callback ,  promise , asyc-await