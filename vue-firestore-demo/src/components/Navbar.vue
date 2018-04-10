<template>
  <nav class="green">
    <div class="container nav-wrapper">
      <div class="">
        <router-link to="/" class="brand-logo hide-on-small-only">Employee Manager</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down show-on-small">
          <li v-if="isLoggedIn"><span class="email black-text truncate">{{ currentUser }}</span></li>
          <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
          <li v-if="isLoggedIn"><button class="btn black" @click="logout">Logout</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'navbar',
  data () {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created () {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser.email
    }
  },
  methods: {
    logout () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log(this.$router)
          this.$router.go({
            path: this.$router.path
          })
        })
    }
  }
}
</script>

<style scoped>
  .email {
    padding-right: 10px;
  }
</style>
