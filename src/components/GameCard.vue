<template>
  <div
    class="card"
  >
    <img v-bind:src="thumbnail">
    <div class="card-header">
      <div class="">
        <h4>{{ title }}</h4>
        <h6>{{publisher}}</h6>
      </div>
      <div v-if="gameUrl">
        <button class="btn btn-action" @click="openProfileUrl">Free</button>
      </div>
    </div>
    <p>{{ shortDescription }}</p>
  </div>
</template>
<script>
export default {
  name: 'GameCard',
  methods: {
    openProfileUrl () {
      window.open(this.gameUrl, '_blank')
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String
    },
    gameUrl: {
      type: String
    },
    platform: {
      type: String
    },
    publisher: {
      type: String
    },
    releaseDate: {
      type: String
    },
    genre: {
      type: String
    },
    freetogameProfileURL: {
      type: String
    }
  }
}
</script>
<style scoped>
  p {
    font-size: 0.8rem;
  }

  .card {
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .card-header{
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  @media screen and (max-width: 425px) {
    .card {
      max-width: 320px;
    }
  }
</style>