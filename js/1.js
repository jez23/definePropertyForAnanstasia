function createNewUser() {

    const newUser = {
        firstName: "",
        lastName: "",
        get getLogin() {
            return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}`
        },
        setNewFirstName(newFirstName) {
            Object.defineProperty(newUser, 'firstName', {
                value: newFirstName
            });
        },
        setNewLastName(newLastName) {
            Object.defineProperty(newUser, 'lastName', {
                value: newLastName
            });
        }
    }

    Object.defineProperty(newUser, 'firstName', {
        value: prompt('enter your name'),
        writable: false,
        configurable: true
    });
    Object.defineProperty(newUser, 'lastName', {
        value: prompt('enter your surname'),
        writable: false,
        configurable: true
    })
    console.log()
    return newUser;
}


let myUser = createNewUser();
console.log(myUser.getLogin);
myUser.lastName = "TEST2";
console.log(myUser);
myUser.setNewFirstName("TEST1");
myUser.setNewLastName("TEST2");
console.log(myUser);

