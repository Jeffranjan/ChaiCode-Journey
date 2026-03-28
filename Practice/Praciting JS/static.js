// class Mathutils {
//   static multi(a, b) {
//     return a * b;
//   }
// }

// console.log(Mathutils.add(2, 3));

// class user {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(val) {
//     this._name = val;
//   }
// }

class Bank {
  balance = 0;

  deposit(amount) {
    this.balance += this.amount;
  }

  get balance() {
    return this.balance;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("invlid Amount");
      return;
    }

    this.balance += amount;
  }
}
const hdfc = new Bank();

hdfc.balance = 1000;

console.log(hdfc.balance);
