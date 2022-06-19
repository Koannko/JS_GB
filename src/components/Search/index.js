export default Vue.component('search-button', {
    model: {
        prop: 'value',
        event: 'input'
    },
    props: [
        'value'
    ],
    template: `
        <div class="search">
           <input type="text" class="goods-search" :value="value" @input="$emit('input', $event.target.value)"/>
        </div>
      `
})