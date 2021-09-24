class SoundManager {

    static #instance = new SoundManager();

    constructor () {
        this.text = "I am the true sound manager!";
        GameManager.get().playerHit.register(SoundManager.#playHitSound);
    }

    static get() {
        return SoundManager.#instance;
    }

    static #playHitSound (data) {
        console.log("*playing hit sound*");
    }

    print() {
        console.log(this.text);
    }

} 