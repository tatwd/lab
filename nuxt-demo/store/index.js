export const state = () => ({
  auth: null 
})

export const getters = {

}

export const mutations = {
  SET_AUTH (state, auth) {
    state.auth = auth
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // console.log(req.headers);
    console.log('\nstore:index.js => actions.nuxtServerInit');
  }
}