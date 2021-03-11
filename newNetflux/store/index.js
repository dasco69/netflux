export const state = () => ({
    url : 'https://api.themoviedb.org/3/movie/76341?api_key='
  })
 
  export const mutations = {
    returnId(id) {
      console.log(id)
    }
  }
  //For auth
  
   export const getters = {
    isAuthenticated(state) {
    return state.auth.loggedIn;
    },
   
    loggedInUser(state) {
    return state.auth.user;
    },
   }; 
   