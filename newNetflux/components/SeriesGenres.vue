<template>
    <div>
        <div>
            <h2>
                {{ title }}
            </h2>
        </div>
        <div v-show="!loaded">Loaded</div>
            <!--
            <div v-for="item in items.results" :key="item">
                <img :src="imageUrl + item.backdrop_path" alt="">
            </div>
            -->
            
            <div>
                <VueSlickCarousel v-if="Object.keys(items).length > 0 " v-bind="settings">
                    <div  
                        v-for="(item , key) in items.results"
                        :key="key"
                    >
                        <h3 class="title-film">{{ item.title || item.name }}</h3>
                        <img @click="pushRoute(item.id)" class="pochette-film" :src="imageUrl + item.backdrop_path" :alt="'Film ' + item.title">
                    </div>
                </VueSlickCarousel>
            </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: 'FilmGenre',
        data() {
            return {
                url : "https://api.themoviedb.org/3/",
                token: process.env.movieToken,
                imageUrl: 'https://image.tmdb.org/t/p/w342',
                language: "&language=fr-FR",
                genre: '&with_genres=',
                loaded: true,
                items: [],
                active: 0,
                settings: {
                    "dots": true,
                    "infinite": true,
                    "initialSlide": 0,
                    "speed": 500,
                    "slidesToShow": 6,
                    "slidesToScroll": 1,
                    "swipeToSlide": true,
                    "responsive": [
                    {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "infinite": true,
                        "dots": true
                    }
                    },
                    {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                    }
                ]
                }
            }
        },
        props: {
            path: {
                type: String,
                default: null
            },
            title: {
                type: String,
                default: null
            },
            numGenre: {
                type: String,
                default: null
            }
        },
        components: {
            VueSlickCarousel
        },
        created () {
            this.fetchData()
        },
        methods: {
            async fetchData () {
                this.items = await fetch(`https://api.themoviedb.org/3${this.path}?api_key=${this.token}${this.language}${this.genre}${this.numGenre}` )
                    .then(res => res.json())
                    .catch(err => console.error(err))
            },
            pushRoute(id) {
              this.$router.push(`/series/${id}`)
              console.log(id)
            }
        },
        
    }
</script>

<style>
.title-film {
    position: absolute;
    bottom: 0;
    margin: 0 0 2rem .5rem;
    background: var(--color-red);
    padding: .2rem;
    text-shadow: 10px 10px 10px #1a1a1a;
    border:1px solid var(--color-txt-white);
    font-size: 1rem;
}
.pochette-film {
    border-radius: 5px;
    width: 98%;
}
</style>