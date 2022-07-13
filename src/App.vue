<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view :user="user" @logout="logout" :rooms="rooms" @addRoom="addRoom" />
  </div>
</template>

<script>
import db from './db.js'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  data: function () {
    return {
      user: null,
      rooms: []
    }
  },
  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null
          this.$router.push('login')
        })
    },
    addRoom: function (payload) {
      db.collection('users').doc(this.user.uid).collection('rooms').add({
        name: payload,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        db.collection('users')
          .doc(this.user.uid)
          .collection('rooms')
          .onSnapshot(snapshot => {
            const snapData = []
            snapshot.forEach(doc => {
              snapData.push({
                id: doc.id,
                name: doc.data().name
              })
            })
            this.rooms = snapData.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
              } else {
                return 1
              }
            })
          })
      }
    })
  },
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
$primary: #5f2882;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
