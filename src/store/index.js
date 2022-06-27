import Vue from 'vue'
import Vuex from 'vuex'
import { BASE_URL, RAPID_API_HOST, RAPID_API_KEY } from '@/plugins/api'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameList: []
  },
  mutations: {
    setGameList(state, payload) {
      state.gameList = payload
    }
  },
  getters: {
    getRecentGames(state) {
      return state.gameList
    }
  },
  actions: {
    async getRecentGames({ commit }, payload) {
      if (!payload) { payload = { '':'' } }
      if (payload.category === 'All' ) { payload.category = null }
      return await axios.get(`${BASE_URL}`, {
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': RAPID_API_HOST
        },
        params: { 'sort-by': 'release-date', category: payload.category || null }
      })
        .then(res => {
          const titleFilterList = []
          if (payload.name) {
            const regexTitle = new RegExp(payload.name.trim().toLowerCase(), 'g')
            res.data.forEach(game => {
              regexTitle.test(game.title.toLowerCase()) ? titleFilterList.push(game) : null
            })
            commit('setGameList', titleFilterList)
            return titleFilterList
          }
          commit('setGameList', res.data)
          return res.data
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
