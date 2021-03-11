<template>
  <div>
    <div class="front-page">
      <HeadFilm :path="bestMovie" category="?primary_release_year=2020"  />
    </div>
    <div class="second-section">
      <Films :path="film" title="Films"/>
      <Series :path="serie" title="Séries du moments"/>
      <div v-for="(item , key) in genres" :key="key">
        <FilmsGenres :title="item.genre" :path="item.path" :numGenre="item.id"/>
      </div>
    </div>
     
  </div>
</template>

<script>
import HeadFilm from '../components/HeadFilm.vue'
import Films from '../components/Films.vue'
import Series from '../components/Series.vue'
import FilmsGenres from '../components/FilmsGenres.vue'
import { mapGetters } from "vuex";

export default {
    name: "index",
    middleware: 'auth',
    components: {
      HeadFilm,
      Films,
      Series,
      FilmsGenres
    },
    data() {
      return {
        bestMovie: '/discover/movie', 
        film: '/movie/top_rated',
        serie: '/discover/tv',
        genres: [
                    {path: '/discover/movie', genre: "Actions" , id: "28"},
                    {path: '/discover/movie', genre: "Comedies" , id: "35"},
                    {path: '/discover/movie', genre: "Documentaire" , id: "99"},
                    {path: '/discover/movie', genre: "Fantasy" , id: "14"},
                    {path: '/discover/movie', genre: "Thriller" , id: "53"},
                    {path: '/discover/movie', genre: "Science fiction" , id: "878"},
                    {path: '/discover/movie', genre: "C'est la guerre" , id: "10752"},
                ]
      }
    },
    computed: {
    ...mapGetters(["loggedInUser"]),
    },  
    
  }
</script>

<style>

/**.front-page .second-section is in assets/css/main.css */
</style>