console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby){
        this.hobbies.push(hobby);
    };

    removeHobby(hobby){
        let foundIndex = this. hobbies.indexOf(hobby);

        //collect items before value
        let valuesBefore = this.hobbies.slice(0, foundIndex)
        //collect items after value
        let valuesAfter = this.hobbies.slice(foundIndex + 1)
        //update hobbies
        this.hobbies = valuesBefore.concat(valuesAfter)
    };

    greeting(){
        console.log("Good day to you! Are you a figment of my imagination?")
    };

}

let person = new Person("Zach", 1, "Ohio", ["cuddling with wife", "reading", "cardistry"]);
 

person.addHobby("gaming");

person.removeHobby("reading");

console.log(person);
