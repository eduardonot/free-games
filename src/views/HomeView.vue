<template>
  <div>
    <WebsiteHeader />
    <div class="err-message" v-if="getRecentGames.length == 0">
      <h1>404</h1>
      <h2 >NO GAME WAS FOUND :(</h2>
    </div>
    <div class="card-container">
      <div
        v-for="game in getRecentGames"
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
      freeGamesList: []
    }
  },
  created () {
    this.getRecent()
  },
  methods: {
    getRecent () {
      this.$store.dispatch('getRecentGames')
    }
  },
  computed: {
    getRecentGames () {
      return  this.$store.getters.getRecentGames
    }
  }
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
