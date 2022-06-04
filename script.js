const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

class GoodsItem {
  constructor({ title, price }) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
    </div>
  `;
  }
}
class GoodsList {
  items = [];
  fetchGoods() {
    this.items = goods;
  }
  render() {
    const goods = this.items.map(item => {
      const goodItem = new GoodsItem(item);
      return goodItem.render()
    }).join('');

    document.querySelector('.goods-list').innerHTML = goods;
  }
  getPrice() {
    return this.items.reduce((result, { price }) => result + price, 0);
  }
}

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
console.log(goodsList.getPrice());




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

// class GoodsBasket {
//   constructor() {
//     this.goods = [];
//   }
//   //возвращает полную стоимость товаров в корзине
//   getPrice() {
//     let sumPrices = 0;
//     for (let item of Object.values(goods.price)) {
//       sumPrices += item;
//     }
//     return sumPrices;
//   }
//   //получает индекс товара и удаляет товар с этим индексом из объекта goods
//   deleteItem(numItem) {
//     goods.splice[numItem, 1];
//   }
//   //получает объект товара и добавляет свойство с ним в конец объекта goods
//   addItem(item) {
//     goods.push(item);
//   };
//   //уменьшает полную стоимость товаров в корзине на 15 %
//   giveSale15 = () => getPrice() * 0.85;
// };



