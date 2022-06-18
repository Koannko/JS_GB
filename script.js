const BASE_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const GET_GOODS_ITEMS = `${BASE_URL}catalogData.json`
const GET_BASKET_GOODS_ITEMS = `${BASE_URL}getBasket.json`

function service(url) {
  return fetch(url)
    .then((res) => res.json())
}


function init() {
  const CustomButton = Vue.component('search-button', {
    template: `
      <button class="search-button" type="button" v-on:click="$emit('click')">
         <slot></slot>
      </button>
    `
  })
  const basketGoods = Vue.component('basket', {
    data() {
      return {
        basketGoodsItems: []
      }
    },

    template: `
      <div class="fixed-area">
         <div class="basket-card">
            <div class="basket-card__header">
               <h1 class="basket-card__header__title">basket card</h1>
               <div class="basket-card__header__delete-icon"
                  v-on:click="$emit('closeclick')"
               ></div>
            </div>
            <div class="basket-card__content">
               content
            </div>
         </div>
      </div>
      `,
    mounted() {

    }
  })

  const goodsItem = Vue.component('goods-item', {
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
              <button class="cart-button goods-button">Добавить</button>
              <button class="cart-button goods-button">Удалить</button>
          </div>   
      </div>
    `
  })

  const app = new Vue({
    el: '#root',
    data: {
      items: [],
      filteredItems: [],
      search: '',
      cardIsVision: false
    },
    methods: {
      setVisionCard() {
        this.cardIsVision = !this.cardIsVision
      },
      fetchGoods() {
        service(GET_GOODS_ITEMS).then((data) => {
          this.items = data;
          this.filteredItems = data;
        });
      },
      filterItems() {
        this.filteredItems = this.items.filter(({ product_name }) => {
          return product_name.match(new RegExp(this.search, 'gui'))
        })
      },
    },
    computed: {
      calculatePrice() {
        return this.filteredItems.reduce((prev, { price }) => {
          return prev + price;
        }, 0)
      }
    },
    mounted() {
      this.fetchGoods();
    }
  })
}
window.onload = init