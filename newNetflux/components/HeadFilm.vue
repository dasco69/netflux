<template>
    <div id="head-film">
       <VueSlickCarousel v-if="Object.keys(items).length > 0 " v-bind="settings">
           <div  
                v-for="(item , key) in items.results"
                :key="key"
                class="affiche"
                >
                
                <img :src="imageUrl + item.backdrop_path " :alt="'Film'+ item.original_title">
                
                <div class="information-film">
                    <h1 class="title">{{ item.title || item.name }}</h1>
                    <p class="synopsis">{{ filterWord(item.overview) }}</p>
                    <div class="button">
                      <ButtonPlay :id="item.id" />
                      <ButtonInfo :id="item.id" />
                    </div>
                </div>
            </div>
        </VueSlickCarousel>
       </div>
</template>

<script>
import ButtonPlay from '../components/ButtonPlay.vue'
import ButtonInfo from '../components/ButtonInfo.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: 'HeadFilm',
        data() {
            return {
                url : "https://api.themoviedb.org/3/",
                token: process.env.movieToken,
                imageUrl: 'https://image.tmdb.org/t/p/original',
                language: "&language=fr-FR",
                loaded: true,
                items: [],
                id: null,
                active: 0,
                settings: {
                    "dots": false,
                    "infinite": true,
                    "initialSlide": 0,
                    "autoplay": true,
                    "speed": 2000,
                    "autoplaySpeed": 50000,
                    "slidesToShow": 1,
                    
                }
            }
        },
        components: {
          ButtonPlay,
        },
        props: {
            path: {
                type: String,
                default: null
            },
            category: {
                type: String,
                default: null
            },
        },
        components: {
            VueSlickCarousel
        },
        created () {
            this.fetchData()
        },
        methods: {
            async fetchData () {
                await fetch(`https://api.themoviedb.org/3${this.path}?api_key=${this.token}${this.language}${this.category}`)
                    .then(res => res.json())
                    .then(data => this.items = data)
                    .catch(err => console.error(err))
            },
            filterWord(paragraphe) {
              //we split phrase in word
              let word = paragraphe.split(' ')
              //we create arr for send word inside this
              let arr = []
              //We stop at 15 word
              for (let i = 0; i < word.length; i++) {
                if(i > 15) break //break for stop propagation
                //push for create new array
                arr.push(word[i])
              }
              //send this inside word
              word = `${arr.join(' ')} ...`
              //return result
              return word
            }
        },
        
    }
</script>

<style >
/**Supprime les bouton next prev du carrousel */
#head-film button[data-v-21137603], #head-film button[data-v-3d1a4f76] {
 display: none!important;
}
.affiche {
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  max-width: 100%;
  height: 80vh;
}
.affiche img {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: auto;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
}
.information-film {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 25rem 4rem;
  line-height: 1;
  position: relative;
  z-index: 50;

}
.information-film h1 {
  font-size: 4rem;
  margin: 0;
}
.information-film .num-saison {
  font-size: 1.6vw;
}
.information-film .synopsis {
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgba(0,0,0,.45);
  margin-top: .1vw;
}
.button  {
  display: inline-flex;
}
 .information-film .button .button-lecture, .information-film .button .button-information  {
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 4rem;
  font-weight: bold;
  font-size: 1.6rem ;
  transition: 200ms;
}
 .information-film .button .button-lecture {
  background: #fff;
  color: var(--color-txt-dark);
  margin-right: 2rem;
}
 .information-film .button .button-lecture:hover {
  background: var(--color-txt-hover);
}
 .information-film .button .button-information {
  background: var(--color-grey);
  color: var(--color-txt-white);
}
 .information-film .button .button-information:hover {
  background: var(--color-grey-hover);
}

@media screen and (max-width: 780px) {
  .affiche {
    height: auto;
  }
  .information-film {
    padding: 15rem 4rem;
  }
  .information-film h1 {
    font-size: 2rem;
  }
  .information-film .synopsis {
    font-size: 0.5rem;
  }
  .information-film .button .button-lecture, .information-film .button .button-information {
    font-size: 1rem;
    padding: 1rem ;
  }
}
</style>