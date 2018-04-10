<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel green white-text center">
            <h3>Login</h3>
            <form>
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="text" id="email" v-model="email">
                <label for="email" class="white-text">Email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password">
                <label for="password" class="white-text">Password</label>
              </div>
              <button class="btn btn-large grey lighten-4 black-text" @click="login">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login (e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert(`You are logged in as  ${user.email}.`)
          this.$router.push('/')
        })
        .catch(err => alert(err.message))

      e.preventDefault()
    }
  }
}
</script>
