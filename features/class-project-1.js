class bankAccount {
  constructor(balance) {
    this.balance = typeof balance === 'number' ? balance : 0;
  }

  deposit(amount) {
    if (typeof amount === 'number') {
      this.balance += amount;
    } else {
      console.log(`${amount} does not a number`);
    }
  }

  withRawd(amount) {
    if (typeof amount === 'number') {
      this.balance -= amount;
    } else {
      console.log(`${number} does not a number`);
    }
  }

  printBalance() {
    console.log(`Your balance is ${this.balance}`);
  }
}

myaccount = new bankAccount(100);
myaccount.deposit(100);
myaccount.withRawd(50);
myaccount.printBalance();