"Use strict";

// 2
class Info {
    constructor(name, age, country, email){
        this._userName = name,
        this.age = age,
        this.country = country,
        this.email = email
    }

    helloWorld (){
        return `Hi my name is ${this._userName} im ${this.age} years, im Web Developer in ${this.country}.`;
    }

    #password = "lkjhgfdsa99";

	infoBar() {
		return `email = ${this.email}, password = ${this.#password}`;
	}

	get pass() {
		return this.#password;
	}

	set pass(newPass) {
		this.#password = newPass;
	}

}

const john = new Info("John", 24, "USA", "john.smith123@gmail.com");

john.pass = "john1921";
console.log(john.infoBar());
console.log(john.helloWorld());

// 3
class InfoBar {
	constructor (userName, lastName) {
		this.userName = userName;
		this.lastName = lastName;
	}
	static sayHello () {
		console.log("Hi its Static class");
	}

	static country = "Armenia"

    static age = 23
}

class StaticTest extends InfoBar {}

InfoBar.sayHello();
StaticTest.sayHello();

console.log(InfoBar.country);
console.log(StaticTest.country);

console.log(InfoBar.age);
console.log(StaticTest.age);