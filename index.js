/*
//stand along object
let Person={
    first_name: "Khadija ",
    last_name:"Akter",
    age : 23,
    getfullname:()=>{
        return Person.first_name +" "+ Person.last_name;

    }
}
console.log(Person.first_name);
console.log(Person.last_name);
console.log(Person.age);
console.log(Person.getfullname());
*/

//class er object
class Person {
    first_name = "Khadija";
    last_name = "Akter";
    age =23;
    getfullName = ()=>{
        return this.first_name +" "+ this.last_name;
    }
}
let p1= new Person();
console.log(p1.first_name);
console.log(p1.last_name);
console.log(p1.age);
console.log(p1.getfullName());
