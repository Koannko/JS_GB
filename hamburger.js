class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.calorie = 20;
        this.price = 50;
    }


    addTopping(topping) {
        this.stuffing.push(topping);
    }
    removeTopping(topping) {
        delete this.stuffing.value(topping);
    }
    getToppings = () => this.stuffing.map(item => item.value);
    getSize = () => { this.size }
    getStuffing = () => { this.stuffing }
    calculatePrice() {
        getSize() === 'big' ? this.price += 50 : this.price;
        for (let item = 0; item < getStuffing().length; item++) {
            switch (getStuffing()) {
                case 'cheese': this.price += 10; break;
                case 'kale': this.price += 20; break;
                case 'potato': this.price += 15; break;
            }
        }
        return this.price;
    }
    calculateCalories() {
        getSize() === 'big' ? this.calorie += 20 : this.calorie;
        for (let item = 0; item < getStuffing().length; item++) {
            switch (getStuffing()) {
                case 'cheese': this.calorie += 20; break;
                case 'kale': this.calorie += 5; break;
                case 'potato': this.calorie += 10; break;
            }
        }
        return this.calorie;
    }
}
