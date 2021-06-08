<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store'
export default {
  data: () => ({
    hasToken: store.getters['auth/hasToken']
  }),

  created () {
    console.log(store.getters['auth/hasToken'])
  }
}
</script>
