export default Vue.component('goods-item', {
    props: [
        'item'
    ],
    template: `
      <div class="goods-item flex">
      <div class="goods-item-header">
          <h3>{{ item.product_name }}</h3>
          <p>{{ item.price }}</p>
      </div>
          <div class="add-del-button">
              <button @click="$emit('addgood', item.id) class="cart-button goods-button">Добавить</button>
              <button class="cart-button goods-button">Удалить</button>
          </div>   
      </div>
    `
})