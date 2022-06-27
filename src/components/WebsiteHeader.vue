<template>
  <nav class="header">
    <div class="website-title">
      <h3 class="thin-title">free</h3>
      <h3 class="bold-title">games</h3>
      <h3 class="thin-title">catalog</h3>
    </div>
    <div class="nav-buttons">
      <dropdown class="my-dropdown-toggle"
        :options="arrayOfObjects" 
        :selected="selectCategory" 
        v-on:updateOption="setCategoryFilter" 
        :placeholder="'Select an Item'">
      </dropdown>
    </div>
  </nav>
</template>
<script>
import Dropdown from 'vue-dropdowns'
export default {
  name: 'WebsiteHeader',
  data () {
    return {
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
  components: { Dropdown },
  methods: {
    setCategoryFilter (option) {
      this.$store.dispatch('getRecentGames', { category: option.value })
    }
  }
}
</script>
<style scoped>
  .header {
    width: 100%;
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.15);
    color: whitesmoke;
  }

  .my-dropdown-toggle::placeholder {
    color: white;
  }

  .nav-buttons{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .website-title{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    margin: 0px 15px 0px 15px;
  }
  
  .thin-title{
    font-weight: lighter;
    color: rgb(197, 197, 197);
  }

  .bold-title{
    font-weight: bolder;
    flex-direction: column;
  }

  @media screen and (max-width: 425px) {
    .nav-buttons{
      flex-direction: column;
    }
    .my-dropdown-toggle {
      width: 100%;
    }
  }
</style>