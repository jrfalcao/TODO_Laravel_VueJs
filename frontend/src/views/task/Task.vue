<template>
  <div class="container">
    <Header />
    <div class="card">
      <div class="card-header">Tarefas Cadastradas</div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Tarefa</th>
              <th scope="col">Concluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Task',

  components: {
    Header
  },

  methods: {
    ...mapActions('task', ['ActionGetTasks']),
    ...mapState('auth'),
    async getTasks () {
      try {
        await this.ActionLogin(this.form)
        this.$router.push({ name: 'Task' })
      } catch (error) {
        this.$swal('Login não efetuado. Verifique seus dados!!!')
      }
    }
  }
}
</script>
