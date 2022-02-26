// Function that return functions 

function Question(hobby){
    switch(hobby){
        case "car":
            return function(name){
            console.log("welcome "+name+ " do you have a car ?")   
            }
        break;

        case "cinema":
            return function(name,type){
            console.log("welcome "+name +"  " +type+" is your favorite cinema type");
            }
        break;


        case "software":
            return function(name,programming_language){
                console.log(" welcome "+name+", are you interested in " +programming_language);                
            }
        break;

        default:
            return function(name){
                console.log(name+" How are you ?");
            }
    }
}

var carQuestion =Question("car");
carQuestion("Burak")

var cinemaQuestion = Question("cinema");
cinemaQuestion("Emel","horror");

var softwareQuestion = Question("software");
softwareQuestion("Sadık","javascript")

