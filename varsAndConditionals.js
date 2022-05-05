console.log(`check1`);

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
  console.log(`Jon Snow has a better attack than Jamie Lanniser`);
} else if (jonSnowAttack < jamieLannisterAttack) {
  console.log(`Jamie Lannister has a better attack than Jon Snow`);
} else {
  console.log(`They have the same attack`);
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
  console.log(`Jon Snow has been slain`);
} else {
  // jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
  jonSnowHealth -= jamieLannisterAttack;
  console.log(`Jon Snow's health is now ${jonSnowHealth}`);
}

// jon picks up a shield.. increase jons defense by 25

jonSnowDefense += 25;

// jamie attacks jon again - if snows health is less than or equal to jamies attack (minus snow's defense), console that jon is dead
// if jon is not dead, update his health, and console log health

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
  console.log(`Jon Snow has been slain`);
} else {
  //update jons health
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  console.log(`Jon's health is now ${jonSnowHealth}`);
}

// raise jons health by 50 however health cannot exceed 100. use an if/else

if (jonSnowHealth + 50 >= 100) {
  jonSnowHealth = 100;
} else {
  jonSnowHealth += 50;
}
// console.log(jonSnowHealth);

// 9 jamie decides to flip a coin. if coin on hands, he will aim f

// missing content

// jon, embarassed, intends to head back to winterfell asap. let's create a backpack for him
// now add sword, shield and food
// Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.

let backpack = [];

//Now, let's add some of his stuff to that backpack. Add 3 strings to the array, "sword", "shield", and "food".

backpack.push("sword", "shield", "food");
// backpack.unshift('sword','shield','food')
// backpack.splice(0,0,"sword",'shield','food')

// Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.
// backpack.shift()
let belt = backpack.splice(0, 1);

// console.log(belt)

//Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack.

let furCoat = "phurr coat";

backpack.push(furCoat);

//Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.
backpack.pop();

// Let's check how much stuff we have in our backpack. Create a variable called itemCount and set it equal to the number of items in the backpack.
let itemCount = backpack.length;

// console.log(itemCount)

// There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.

backpack.push("flint", "blanket", "knife", "toothbrush");
// backpack.splice(backpack.length,0,"flint","blanket","knife","toothbrush")
// console.log(backpack)

//Realizing his bag is overflowing, Jon decides to split up his content into two bags. Create a backpack2 variable that will hold some items. Use the splice method to move the flint, blanket, and knife from backpack to backpack2

let backpack2 = backpack.splice(2, 3);

// Using bracket syntax, console.log the first item in backpack2
// console.log(backpack2[2])

///Loops

//lets see the contents of Jon's backpack
for (let i = 0; i < backpack2.length; i++) {
  // console.log(backpack2[i])
}

for (let i = 0; i < backpack.length; i++) {
  // console.log(backpack[i])
}

// backpack2.push('potion','spells','spider')

console.log(backpack2);
//rewrite this to only show the first three items
for (let i = 0; i < 3; i++) {
  //   console.log(backpack2[i]);
}

// backpack.pop()
if (backpack.length === 0) {
  console.log("backpack empty");
} else if (backpack.length >= 3) {
  for (let i = 0; i < 3; i++) {
    console.log(backpack[i], "if-fired");
  }
} else {
  for (let i = 0; i < backpack.length; i++) {
    console.log(backpack[i], "else-fired");
  }
}
