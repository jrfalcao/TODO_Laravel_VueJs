<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Seja Bem-vindo</h3>
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form @submit.prevent="submit" id="login-form">
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <label for="email" class="text-info">Email:</label><br />
                <input v-model="form.email" type="email" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Senha:</label><br />
                <input v-model="form.password" type="password" class="form-control" required />
              </div>
              <div class="col-12 px-2">
                <router-link to="/register">
                  <p class="text-end text-info">Efetuar Cadastro</p>
                </router-link>
              </div>
              <div class="form-group justify-content-center mt-4">
                <div class="text-center">
                  <button class="btn btn-block btn-info col-8 text-white text-bold">
                    Entrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),

  methods: {
    ...mapActions('auth', ['ActionLogin']),
    async submit () {
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

<style>
  #login {
    margin: 0;
    padding: 0;
    background-color: #17a2b8;
    height: 100vh;
  }
  #login-box {
    margin-top: 100px;
    max-width: 600px;
    height: 320px;
    border: 1px solid #9C9C9C;
    background-color: #EAEAEA;
  }
  #login-form {
    padding: 20px;
  }
</style>
