let readlineSync = require('./node_modules/readline-sync/lib/readline-sync.js');
//let readline = require('readline');
//let rl = readline.createInterface(process.stdin, process.stdout);

class Pet {
	constructor(name, happiness, hunger) {
		this.name = name;
		this.happiness = happiness;
		this.hunger = hunger;
		this.alive = true;
	}

	status() {
		console.log(`\nName: ${this.name}\tHappiness: ${this.happiness}\tHunger: ${this.hunger}`);
		console.log(`Food left: ${food}`);
	}

	speak() {
		this.happiness += 2;
		console.log("\nYou say hi to your pet.");
		console.log("Your pet goes \"YAYYYY :3\" and makes furry noises.");
		console.log("You shake your head in disgust");
	}

	play() {
		this.happiness += 5;
		console.log("\nYou play with your pet.");
		console.log("Your pet goes \"ARF ARF ARF HAHAHA :33333\" and starts salivating.");
		console.log("You wonder why you're playing this game");
	}

	feed() {
		if (food > 0) {
			food--;
			this.hunger -= 5;
			if (this.hunger < 0) {
				this.hunger = 0;
			}
			this.happiness += 20;
			console.log("\nYou feed your pet.");
			console.log("Your pet slurps it up and burps extremely loudly and starts humping the carpet with happiness");
			console.log("Oh dear");
		} else {
			console.log("\nYou have run out of food. No you can't buy any more");
		}
	}

	kill() {
		console.log("\nYou kill your pet.\n");
		console.log("****************************************");
		console.log("https://www.youtube.com/watch?v=3grkLm0pabA");
		console.log("CREDITS:");
		console.log("TAMAGOTCHI JAVASCRIPT TEXT BASED GAME");
		console.log("Made by: NottNott");
		console.log("Thanks to all the fans that made this game possible");
		console.log("****************************************");
	}
}


console.log("Welcome to Tamagotchi");
const name = readlineSync.question("What is your pet's name?\n")
pet = new Pet(name, 10, 5);
console.log(`Your pet's name is: ${pet.name}\n`);

let food = 10;
let input = '';
let invalid = false;
while (pet.alive) {
	if (!invalid) {
		pet.status();
	}

	input = readlineSync.question('Type a command: feed, play, speak, kill\n');
	invalid = false;
	switch (input) {
		case 'feed':
			pet.feed();
			break;
		case 'speak':
			pet.speak();
			break;
		case 'play':
			pet.play();
			break;
		case 'kill':
			pet.kill();
			pet.alive = false;
			break;
		default:
			console.log("Invalid input\n")
			invalid = true;
			break;
	}
}
