
// Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children.
// As a day job he's a construction worker, that makes houses.
// He likes to eat dates and smoke water pipe.
// Abdulkareem has a horse, named Adel.
// The horse is 15 years old and has the color brown.
// Usually the horse eats grass or helps transport materials for Abdulkareem.
// And they lived happily ever after!

class Human {
  constructor(name, age, location, family, job, hobbies, pet) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.family = family;
    this.job = job;
    this.hobbies = hobbies;
    this.pet = pet;
  }
  future() {
    console.log("And they lived happily ever after!")
  }
}
class Animal extends Human {
  constructor(name, age, color, activities) {
    super(name, age)
    this.color = color
    this.activities = activities
  }
}


const abdulkareem = new Human("Abdulkareem", 35, "Riyadh", ["wife", "3 children"], "construction worker", ["eat dates", "smoke water pipe"], "horse")
const adel = new Animal("Adel", 15, "brown", ["eats grass", "helps transport materials"])
console.log(`${abdulkareem.name} is a ${abdulkareem.age} year old man, that lives in ${abdulkareem.location}. 
He has a ${abdulkareem.family[0]} and ${abdulkareem.family[1]}.
As a day job he's a ${abdulkareem.job}, that makes houses.
He likes to ${abdulkareem.hobbies[0]} and ${abdulkareem.hobbies[1]}.
Abdulkareem has a ${abdulkareem.pet}, named ${adel.name}.
The horse is ${adel.age} years old and has the color ${adel.color}.
Usually the ${abdulkareem.pet} ${adel.activities[0]} or ${adel.activities[1]} for ${abdulkareem.name}.`)
adel.future()