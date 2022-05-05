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
let backpack = [];

backpack.push(`sword`, `shield`, `food`);
// backpack.unshift(`sword`, `shield`, `food`);
// backpack.splice(0, 0, `sword`, `shield`, `food`);

// console.log(backpack);

// take off sword
// backpack.shift();
// backpack.splice(0, 1);

console.log(backpack);
//save sword to belt
let belt = backpack.splice(0, 1);
// console.log(belt);

let furCoat = "fur coat";
backpack.push(furCoat);

//
backpack.pop();
// console.log(backpack);
//
let itemCount = backpack.length;

console.log(itemCount);
//

// backpack.push("flint", "blanket", "knife", "toothbrush");
backpack.splice(backpack.length, 0, "flint", "blanket", "knife", "toothbrush");
console.log(backpack);

// split content into two bags create a backpack2 variable that will hold some items use splice method to move flint, blanket, and knife into it

let backpack2 = backpack.splice(2, 3);
console.log(backpack2);

//

// console.log(backpack2[2]);
//

for (let i = 0; i < backpack2.length; i++) {
  console.log(backpack2[i]);
}

for (let i = 0; i < backpack.length; i++) {
  console.log(backpack[i]);
}

console.log(backpack2);

// rewrite to only show 3
for (let i = 0; i < 3; i++) {
  console.log(backpack2[i]);
}

if (backpack2.length >= 3) {
  for (let i= 0; i <3: i++) {
  console.log(backpack2[i]);
} 
} else {
  for (let i = 0; i < backpack2.length; i++) {
    console.log(backpack[i]);
  }
}
//
