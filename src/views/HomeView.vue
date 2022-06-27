<template>
  <div>
    <WebsiteHeader />
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
      const games = this.$store.getters.getRecentGames
      return games
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
</style>
