class GameManager {

    static #instance = new GameManager();

    constructor () {
        this.text = "I am the true game manager!";
        this.playerHit = new Subject();
    }

    static get() {
        return GameManager.#instance;
    }

    print() {
        console.log(this.text);
    }

} 