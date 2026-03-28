// const user1 = {
//   name: "Ranjan",
//   score: 100,
//   increment() {
//     this.score++;
//   },
// };

// const user2 = {
//   __proto__: user1, // Inheritied property frmo
// };

// const user3 = Object.createe(user1);

// console.log(user3);

function User(name, score) {
  this.name = name;
  this.score = score;
}

const user1 = new User("Ranjan", 100);

console.log(user1.name);
console.log(user1.score);
