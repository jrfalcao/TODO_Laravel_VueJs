<template>
  <div id="app">
    <div v-if="hasToken">
      <Header />
    </div>
    <router-view/>
  </div>
</template>

<script>
import store from './store'
import Header from './components/Header.vue'
export default {
  data: () => ({
    hasToken: store.getters['auth/hasToken']
  }),

  components: {
    Header
  },

  created () {
    console.log(store.getters['auth/hasToken'])
  }
}
</script>
