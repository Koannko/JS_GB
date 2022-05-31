const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'Clothes', price = '$100') => {
  return `
    <div class="goods-item">
      <h3>${title}</h3>
      <p>${price}</p>
    </div>
  `;
};

const renderGoodsList = (list = goods) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join("");
}

renderGoodsList(goods);

// Запятые были из - за того, что innerHTML получает массив goodList и превращает
// в строку, с разделителем запятая. С помощью join можно изменить разделитель на 
// пустую строку.
// Можно было бы объединить эти две функции в одну:

// const renderGoodsList = (list = goods) => {
//   let goodsList = list.map(item => {
//     return `
//     <div class="goods-item">
//       <h3>${item.title}</h3>
//       <p>${item.price}</p>
//     </div>
//   `;
//   });

//   document.querySelector('.goods-list').innerHTML = goodsList.join("");
// }


