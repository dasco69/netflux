<template>
    <div class="movie-id">
        <div v-if="Object.keys(items).length > 0 " class="info-movie">
            <div class="info-img">
                <img :src="imageUrl + items.poster_path" alt="">
                <div class="description-movie" >
                    <h2>
                        {{ items.title}}
                    </h2>
                    
                    <div class="genre-movie">
                      <p v-for="genre in items.genres" :key="genre">
                          <em>Genre :</em> {{ genre.name }}
                    </p>
                    </div>
                    <div class="info-plus-film">
                        <h4 class="popularite-movie">Recommandé à {{ items.vote_average * 10}} %</h4>
                        <h4>
                            {{ items.release_date.split('-')[0] }}
                        </h4>
                        <h4>
                            {{ changeMinInHour(items.runtime)}}
                        </h4>
                    </div>
                    <p class="synopsis-movie">
                        {{ items.overview}}
                    </p>
                    
                    <ButtonPlay/>
                </div>
                
            </div>
            <div>
                <h1>Autres Films</h1>
                <Films :path="film"/>
            </div>
        </div>
        <div v-else class="loading-movie">
            <h2>Loading...</h2>
        </div>
    </div>
</template>

<script>
import ButtonPlay from '../../components/ButtonPlay.vue'
import Films from '../../components/Films.vue'
    export default {
        name: "id",
        layout:'infoId',
        async asyncData({ params }) {
            const id = params.id
            return { id }
        },
        data() {
            return {
                url : "https://api.themoviedb.org/3/",
                token: process.env.movieToken,
                imageUrl: 'https://image.tmdb.org/t/p/original',
                language: "&language=fr-FR",
                loaded: true,
                items: [],
                film: '/discover/movie',
                hour: '',
                min: ''
            }
        },
        components: {
            ButtonPlay,
            Films
        },
        created () {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                await fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.token}${this.language}`)
                .then(res => res.json())
                .then(data => this.items = data)
                .catch(err => console.error(err))
            },
            changeMinInHour(e) {
                let totalHour = e
                totalHour = `${totalHour / 60}`
                totalHour = Number.parseFloat(totalHour).toFixed(2)

                this.hour = totalHour.split('.')[0]
                this.min = totalHour.split('.')[1]
                return `${this.hour}H ${this.min}min`
            }
        },
        
    }
</script>

<style scoped>
.loading-movie {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
}
.info-movie , .info-img {
    display: flex;
    justify-content: flex-start;
}
.info-movie {
    margin: var(--marge-l-r);
    margin-top: var(--magin-top-nav);  
    flex-direction: column;
}
.info-img {

}
.info-img img {
    width: 20%;
    height: auto;
    margin-right: 2rem;
    border: 2px solid #fff;
}
.description-movie {
    display: flex;
    flex-direction: column;
    width: 100%;

}
.description-movie h2 {
}
.genre-movie, .info-plus-film {
    display: inline-flex;
    align-items: center;
}
.popularite-movie {
    color: #46d369;
}
.info-plus-film h4 {
    margin-right: 1rem;
}
.genre-movie p {
    margin-right: 1rem;
}
.genre-movie p em {
    color: var(--color-grey);
}
.synopsis-movie {
    line-height: 2;
    font-weight: lighter;
    font-size: 1.1em;
    margin-bottom: 5rem;
}
 
@media screen and (max-width: 780px) {
    .info-movie , .info-img{
        display: block;
    }
    .info-img {
        width: 90%;
        height: auto;
    }
    .info-img img {
        width: 100%;
    }
    
}

</style>