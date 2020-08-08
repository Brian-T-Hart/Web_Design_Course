function battleBot(name) {
    this.name = name;
    this.strength = Math.floor((Math.random() * 61) + 40);
    this.attack = Math.floor((Math.random() * 31) + 10);
}

var bot1 = new battleBot('Pikachu');
var bot2 = new battleBot('Charmander');

console.log(bot1, bot2);

function fight(bot1, bot2) {
    while (bot1.strength > 0 && bot2.strength > 0) {
        bot1.strength = bot1.strength - bot2.attack;
        console.log(bot1.name + ': ' + bot1.strength);
        if (bot1.strength <= 0) {
            return bot2.name + ' is the winner!';
        }
        bot2.strength = bot2.strength - bot1.attack;
        console.log(bot2.name + ': ' + bot2.strength);
        if (bot2.strength <= 0) {
            return bot1.name + ' is the winner!';
        }
    }
    console.log(bot1.strength, bot2.strength);
}

console.log(fight(bot1, bot2));