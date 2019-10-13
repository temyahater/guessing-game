class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let midRange = Math.round((this.min + this.max) / 2);
        return midRange;
    }

    lower() {
        return this.max = this.guess();
    }

    greater() {
        return this.min = this.guess();
    }
}

module.exports = GuessingGame;
