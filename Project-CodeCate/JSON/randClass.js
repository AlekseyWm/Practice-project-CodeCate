
class Random {
    #min;
    constructor(min, max) {;
        this.#min = min;
        this.max = max;
    }

    #getRandomInt() {
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    }

    *randomF() {
        const oldValue = [];
        const newNumber = (n) => Math.round(Math.random() * n);
        while (oldValue.length < (this.max)) {
            let newNum = newNumber(this.max);
            if (!oldValue.some((n) => n === newNum)) {
                oldValue.push(newNum);
                yield newNum;
            }
        }
        return -1;
    }
}

const proba = new Random(2);
console.log(proba.randomF());

