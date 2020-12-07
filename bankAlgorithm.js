class banking{
    constructor(){
        this.accountNumber = 500000000;
        this.userName = [];
        this.accountNo = [];
        this.email = [];
        this.password = [];
        this.accountBalance = [] ;
    }
    // find account number or account name when account name or account number is put
    find(data){
        for (let i = 0; i < this.userName.length; i++){
            if (this.userName[i] === data || this.accountNo[i] === data){
                return (`Name: ${this.userName[i]}\nAccount No: ${this.accountNo[i]}\nAccount exists.`);
            }
        }
        return "Search not found!";
    }
    //create new account
    createAccount(name, email, password){
        this.accountNumber++;
        this.accountNo.push(this.accountNumber);
        this.userName.push(name);
        this.email.push(email);
        this.password.push(password);
        this.accountBalance.push(0);
        return `AAccount has been created sucessfuly.\nAccount Number: ${this.accountNumber}\nAccount Name: ${name}\nYour account is now ready for use.`
    }
    //check balance
    checkBalance(accountNo, password){
        for (let i = 0; i < this.accountNo . length; i++){
            if (this.accountNo[i] === accountNo && this.password[i] === password){
                return(`Account Number: ${this.accountNo[i]}\nAccount Name: ${this.userName[i]}\nAccount Balance: ${this.accountBalance[i]}`);
            }
        }
        return "Account not found."
    }
    //transfer money from one account to another
    transferMoney(from, password, to, amount){
        var account = this.accountNo;
        var balance = this.accountBalance;
        var name = this.userName;
        var passcode = this.password
        for (let i = 0; i < account.length; i++){
            if (account[i] === from && passcode[i] === password){
                if(balance[i] < amount){
                    return "Insurficient funds\nPlease recharge and try again latter!"
                }
                else{
                    return recieve()
                }
                function recieve(){
                    for (let j = 0; j < account.length; j++){
                        if (account[j] === to){
                            balance[i] -= amount;
                            balance[j] += amount;
                            return (`Transfered: ${amount}\nFrom Account Number: ${account[i]}\nUnder Names: ${name[i]}\nTo Account Number: ${account[j]}\nUnder Names: ${name[j]}\nAccount Ballance: ${balance[i]}`);
                        }
                    }
                    return "Recieving account number not found."
                }
            }
        }
        return "Sending account number not found!"
    }
    //deposit money to the account
    depositeMoney(accountNo, amount){
        for (let i = 0; i < this.accountNo.length; i++){
            if (this.accountNo[i] === accountNo){
                this.accountBalance[i] += amount;
                return (`Account Name: ${this.userName[i]}\nAccount number: ${this.accountNo[i]}\nDeposite: ${amount}`)
            }
        }
        return "Account not found"
    }
    //withdraw money
    withdrawMoney(accountNo, password, amount){
        for (let i = 0; i < this.accountNo.length; i++){
            if (this.accountNo[i] === accountNo && this.password[i] === password){
                if (this.accountBalance[i] < amount){
                    return (`Insurficient funds\nAccount balance is: ${this.accountBalance[i]}\nPlease insert a valid amount.`);
                }
                else{
                    this.accountBalance[i] -= amount;
                    return (`Account Name: ${this.userName[i]}\nAccount number: ${this.accountNo[i]}\nWithdraw: ${amount}\nBalance: ${this.accountBalance[i]}`)
                }
            }
        }
        return "Account not found"
    }
    //close account by a customer
    closeAccount(accountNo, password){
        for(let i = 0; i < this.accountNo.length; i++){
            if(this.accountNo[i] === accountNo && this.password[i] === password){
                var output = (`Account has been closed sucessfuly\nAccount Number: ${this.accountNo[i]}\nAccount Name: ${this.userName[i]}\nNow account nolonger exists`);
                delete this.accountNo[i];
                delete this.password[i];
                delete this.email[i];
                delete this.userName[i];
                delete this.accountBalance[i];
                return output; 
            }
        }
        return "Account not found"
    }
    //payment of bills
    payBills(from, password, to, bill, amount){
        var account = this.accountNo;
        var balance = this.accountBalance;
        var name = this.userName;
        var passcode = this.password
        for (let i = 0; i < account.length; i++){
            if (account[i] === from && passcode[i] === password){
                if(balance[i] < amount){
                    return "Insurficient funds\nPlease recharge and try again latter!"
                }
                else{
                    for (let j = 0; j < account.length; j++){
                        if (name[j] === to){
                            balance[i] -= amount;
                            balance[j] += amount;
                            return (`Payments of: ${amount}\nTo: ${name[j]}\nFrom Account Number: ${account[i]}\nUnder Names: ${name[i]}\nReason: ${bill}\nHas been sucessfull\nAccount Ballance: ${balance[i]}`);
                        }
                    }
                    return "Recieving account number not found."
                }
            }
        }
        return "Sending account number not found!"
    }
}
var users = new banking();
users.createAccount("Mathias", "kisekkamathias12@gmail.com", "5467ugtr65");
users.createAccount("Mathia", "kisekkamathias12@gmail.co", "746463ygdvbrj8");
users.createAccount("Maths", "kisekkamathias12@gmail.com", "73ygdvbrj8");
users.createAccount("Math", "kisekkamathas12@gmail.com", "73ygdvbj8");
users.createAccount("Mathias", "kisekkamathias12@gmail.com", "5467ugtr6");
users.createAccount("Mathis", "kisekkamathias2@gmail.com", "547ugtr6");
users.createAccount("umeme", "umeme@gmail.com", "umeme2020");
users.createAccount("NWSC", "nwsc@gmail.com", "nwsc2020")
console.log(users.checkBalance(500000002, "746463ygdvbrj8"));
console.log(users.checkBalance(500000003, "73ygdvbrj8"));
console.log(users.depositeMoney(500000001, 3000));
console.log(users.transferMoney(500000001,"5467ugtr65", 500000002, 2000));
console.log(users.depositeMoney(500000001, 3000));
console.log(users.depositeMoney(500000003, 3000));
console.log(users.checkBalance(500000001, "5467ugtr65"));
console.log(users.depositeMoney(500000002, 6000));
console.log(users.transferMoney(500000002,"746463ygdvbrj8", 500000001, 2000));
console.log(users.transferMoney(500000003,"73ygdvbrj8", 500000001, 2000));
console.log(users.depositeMoney(500000003, 5000));
console.log(users.checkBalance(500000002, "746463ygdvbrj8"));
console.log(users.checkBalance(500000003, "73ygdvbrj8"));
console.log(users.depositeMoney(500000001, 3000));
console.log(users.checkBalance(500000001, "5467ugtr65"));
console.log(users.withdrawMoney(500000001, "5467ugtr65", 3000));
console.log(users.withdrawMoney(500000001, "5467ugtr65", 5000));
console.log(users.withdrawMoney(500000002, "746463ygdvbrj8", 1000));
console.log(users.withdrawMoney(500000003, "73ygdvbrj8", 2000));
console.log(users.checkBalance(500000003, "73ygdvbrj8"));
console.log(users.checkBalance(500000001, "5467ugtr65"));
console.log(users.withdrawMoney(500000001, "5467ugtr65", 3000));
console.log(users.closeAccount(500000001,"5467ugtr65"));
console.log(users.closeAccount(500000002 ,"746463ygdvbrj8"));
console.log(users.payBills(500000003,"73ygdvbrj8", "umeme", "yaka", 2000));
console.log(users.checkBalance(500000007, "umeme2020"));
console.log(users.payBills(500000003,"73ygdvbrj8", "NWSC", "Water Bill", 2000));
console.log(users.checkBalance(500000008, "nwsc2020"));
console.log(users.depositeMoney(500000003, 5000));
console.log(users.checkBalance(500000003, "73ygdvbrj8"));