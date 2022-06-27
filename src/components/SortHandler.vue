<template>
  <div class="handler-container">
    <select @change="changeCategory">
      <option selected disabled value="All">Category</option>
      <option 
        v-for="option in arrayOfObjects"
        :key="option.index"
        v-on:selected="changeCategory"
      >
        {{ option.name }}
      </option>
    </select>
    <input v-model="nameFilter" type="text" placeholder="NAME">
    <button @click="setCategoryFilter" class="btn btn-action">search</button>
  </div>
</template>
<script>
export default {
  name: 'SortHandler',
  data () {
    return {
      nameFilter: null,
      categoryFilter: '',
      arrayOfObjects: [
        {value: 'All', name: 'All'},
        {value: 'Card', name: 'Card'},
        {value: 'Fantasy', name: 'Fantasy'},
        {value: 'Fighting', name: 'Fighting'},
        {value: 'MMO', name: 'MMO'},
        {value: 'MMORPG', name: 'MMORPG'},
        {value: 'MOBA', name: 'MOBA'},
        {value: 'Racing', name: 'Racing'},
        {value: 'Shooter', name: 'Shooter'},
        {value: 'Social', name: 'Social'},
        {value: 'Sports', name: 'Sports'},
        {value: 'Strategy', name: 'Strategy'}
      ],
      selectCategory: {
        name: 'Category',
        value: 'All'
      }
    }
  },
  methods: {
    setCategoryFilter () {
      this.$emit('clickedToSort')
      this.$store.dispatch('getRecentGames', { category: this.categoryFilter, name: this.nameFilter })
    },
    changeCategory(value) {
      this.categoryFilter  = value.target.value
    }
  }
}
</script>
<style scoped>

  input {
    width: 100%;
    padding: 5px;
    margin: 5px;
    font-weight: 500;
    border: 1px solid whitesmoke;
    border-radius: 2px;
    background-color: transparent;
    color: whitesmoke;
  }

  select, option {
    width: 100%;
    padding: 5px;
    border: 1px solid whitesmoke;
    background-color: #262626;
    color: whitesmoke;
  }

  .handler-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
  }
</style>