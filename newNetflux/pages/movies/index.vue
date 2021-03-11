<template>
    <div>
        <div class="title-page-movie">
            <h1>Films</h1>
        </div>
        <div class="front-page">
            <HeadFilm :path="bestMovie" category="?primary_release_year=2020"  />
        </div>
        <div class="second-section">
            <Films :path="film" title="Films"/>
            <Films :path="discover" title="Découverte"/>
            
            <div v-for="(item , key) in genres" :key="key">
                <FilmsGenres :title="item.genre" :path="item.path" :numGenre="item.id"/>
            </div>
            
        </div>
       
    </div>
</template>
 
<script>
import HeadFilm from '../../components/HeadFilm.vue'
import Films from '../../components/Films.vue'
import FilmsGenres from '../../components/FilmsGenres.vue'
    export default {
        name: "movies",
        layout: "infoId",
        middleware: "auth",
        data() {
            return {
                bestMovie: '/discover/movie', 
                film: '/movie/top_rated',
                discover: '/discover/movie',
                genres: [
                    {path: '/discover/movie', genre: "Actions" , id: "28"},
                    {path: '/discover/movie', genre: "Comedies" , id: "35"},
                    {path: '/discover/movie', genre: "Documentaire" , id: "99"},
                    {path: '/discover/movie', genre: "Fantasy" , id: "14"},
                    {path: '/discover/movie', genre: "Films d'horreur" , id: "27"},
                    {path: '/discover/movie', genre: "Thriller" , id: "53"},
                    {path: '/discover/movie', genre: "Science fiction" , id: "878"},
                    {path: '/discover/movie', genre: "C'est la guerre" , id: "10752"},
                    {path: '/discover/movie', genre: "Films à l'eau de rose" , id: "10749"},
                    {path: '/discover/movie', genre: "Films d'animations" , id: "16"},
                ]
            }
        },
        components: {
            HeadFilm,
            Films,
            FilmsGenres
        },
    }
</script>

<style >
.title-page-movie {
    margin-top: var(--magin-top-nav );
    margin-left: 4rem;
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
}
.title-page-movie h1 {
    font-size: 3rem;
}
</style>