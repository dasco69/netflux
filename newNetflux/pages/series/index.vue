<template>
    <div>
        <div class="title-page-serie">
            <h1>Series</h1>
        </div>
        <div class="front-page">
            <HeadFilm :path="bestSerie" category="?primary_release_year=2020"  />
        </div>
        <div class="second-section">
            <Series :path="serie" title="Séries du moments"/>
            <div v-for="(item , key) in genres" :key="key">
                <SeriesGenres :title="item.genre" :path="item.path" :numGenre="item.id"/>
            </div>
        </div>
       
    </div>
</template>

<script>
import HeadFilm from '../../components/HeadFilm.vue'
import Series from '../../components/Series.vue'
    export default { 
        name: "series",
        layout: "infoId",
        middleware: "auth",
        data() {
            return {
                bestSerie: '/discover/tv',
                serie: '/discover/tv',
                genres: [
                    {path: '/discover/tv', genre: "Actions & Aventure" , id: "10759"},
                    {path: '/discover/tv', genre: "Humouristique" , id: "35"},
                    {path: '/discover/tv', genre: "Documentaire" , id: "99"},
                    {path: '/discover/tv', genre: "Crime" , id: "80"},
                    {path: '/discover/tv', genre: "Thriller" , id: "53"},
                    {path: '/discover/tv', genre: "Science fiction & Fantastique" , id: "10765"},
                    {path: '/discover/tv', genre: "Guerre et Politique" , id: "10768"},
                    {path: '/discover/tv', genre: "Talk Show" , id: "10767"},
                    {path: '/discover/tv', genre: "Animations" , id: "16"},
                ]
            }
        },
        components: {
            HeadFilm,
            Series
        },
    }
</script>

<style >
.title-page-serie {
    margin-top: var(--magin-top-nav );
    margin-left: 4rem;
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
}
.title-page-serie h1 {
    font-size: 3rem;
}
</style>