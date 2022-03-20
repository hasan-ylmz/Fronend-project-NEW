// Getters & Setters  ES5

const person = {
    firstName :"Burak",
    lastName: "Yılmaz",
},

Object.defineProperty(person,"fullName",{
    get function(){
        return `${this.firstName} ${this.lastName} `
    },

    set function(){
        
    }
})

Object.defineProperty(person,)
// Person firstName değişebilir .
// person.firstName = "Mahmut"

// person.setFullName("Sadık abuzer");
// console.log(person.getFullName());