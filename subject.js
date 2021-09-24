class Subject {

    constructor () {
        this.observers = [];
    }

    register (observer) {
        this.observers.push(observer);
    }

    unregister(observer) {
        let newObservers = [];
        for (let i = 0; i < this.observers.length; i++) {
            if(this.observers[i] != observer) {
                newObservers.push(this.observers[i]);
            }
        }
        this.observers = newObservers;
    }

    notify(data) {
        //console.log(data);
        for (let i = 0; i <  this.observers.length; i++) {
            this.observers[i](data);
        }
    }

}