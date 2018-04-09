import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBQ_eXtb9MLmT1rkojzsnmVF3ZsGKxXj0U',
  authDomain: 'vuefire-demo-c8e90.firebaseapp.com',
  databaseURL: 'https://vuefire-demo-c8e90.firebaseio.com',
  projectId: 'vuefire-demo-c8e90',
  storageBucket: '',
  messagingSenderId: '1060267353017'
})

export const db = app.database()
export const namesRef = db.ref('names')
