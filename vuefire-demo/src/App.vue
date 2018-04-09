<template>
  <div id="app">
    <h1>Sandbox</h1>
    <div>
      <label>Name:</label>
      <input type="text" v-model="name" autofocus>
      <button @click="submitName">Add</button>
    </div>

    <div>
      <ul>
        <li
          v-for="personName in names"
          v-bind:key="personName['.key']"
        >
          <div v-if="!personName.edit">
            <p>{{ personName.name }}</p>
            <button @click="removeName(personName['.key'])">Remove</button>
            <button @click="setEditName(personName['.key'])">Edit</button>
          </div>
          <div v-else>
            <input type="text" v-model="personName.name">
            <button @click="saveEdit(personName)">Save</button>
            <button @click="cancelEdit(personName['.key'])">Cancel</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase'
export default {
  name: 'app',
  data () {
    return {
      name: ''
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({
        name: this.name,
        edit: false
      })
      this.name = ''
    },
    removeName(key) {
      if (confirm('Are you sure to remove this item?')) {
        namesRef.child(key)
        .remove()
        .catch(err => alert(err.message))
      }
    },
    setEditName(key) {
      namesRef
        .child(key)
        .update({ edit: true })
        // .then(ok => alert('edit => true!'))
        .catch(err => alert(err.message))
    },
    saveEdit(personName) {
      let key = personName['.key']
      namesRef.child(key).set({
        name: personName.name, edit: false
      })
    },
    cancelEdit(key) {
      namesRef.child(key).update({ edit: false })
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

input {
  font-family: inherit;
  border: 1px solid #e0e0e0;
}

button {
  background-color: transparent;
  border: 2px solid #000;
}
</style>
