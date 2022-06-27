<template>
  <div>
    <WebsiteHeader @clickedToSort="clickedToSort"/>
    <div class="err-message" v-if="getGameList.length == 0">
      <h1>404</h1>
      <h2 >NO GAME WAS FOUND :(</h2>
    </div>
    <div id="test" class="card-container">
      <div
        v-for="game in getGameList"
        :key="game.id"
      >
        <GameCard 
          :title="game.title"
          :thumbnail="game.thumbnail"
          :shortDescription="game.short_description"
          :gameUrl="game.game_url"
          :platform="game.platform"
          :publisher="game.publisher"
          :releaseDate="game.releaseDate"
          :freetogameProfileURL="game.freetogame_profile_url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";
import WebsiteHeader from '@/components/WebsiteHeader.vue'
export default {
  name: 'HomeView',
  components: { GameCard, WebsiteHeader },
  data() {
    return {
      listItemsToShow: 15,
      freeGamesList: []
    }
  },
  created () {
    window.addEventListener("scroll", this.checkElementPosition)
    this.getRecent()
  },
  methods: {
    getRecent () {
      this.$store.dispatch('getRecentGames')
    },
    checkElementPosition () {
      // CHECK IF THE ELEMENT IS IN THE BOTTOM OF THE SCREEN
        let bottomOfWindow = document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight
        if (bottomOfWindow) {
          this.listItemsToShow += 15
          this.getRecent()
      }
    },
    clickedToSort() {
      this.listItemsToShow = 15
    }
  },
  computed: {
    getRecentGames () {
      return  this.$store.getters.getRecentGames
    },
    getGameList () {
      const game = this.$store.getters.getRecentGames
      return game.splice(0, this.listItemsToShow)
    }
  },
}
</script>

<style scoped>

.card-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.err-message{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
