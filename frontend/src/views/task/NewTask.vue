<template>
  <div class="container">
    <Header />
    <h1>New Task Component</h1>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
export default {
  name: 'NewTask',

  components: {
    Header
  }
}
</script>
