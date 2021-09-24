class Player {

    static players = [];

    constructor(id, hp) {
        this.id = id;
        this.hp = hp;
        GameManager.get().playerHit.register(Player.#takeDamage);
        Player.players.push(this);
    }

    static #takeDamage (data) {
        for (let player of Player.players) {
            if(data.id == player.id) {
                player.hp -= data.damage;
                console.log("Player " + player.id + " has taken " + data.damage + " damage and is now at " + player.hp + " health!");
            }
        }
    }
}