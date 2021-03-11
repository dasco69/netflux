<template>
    <div>
        <div v-if="goPlay()">
            <button @click="returnId(id)" class="button-lecture">{{ states.play }}</button>
        </div>
        <div v-else>
            <button @click="returnId(id)" class="button-lecture">{{ states.download }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "buttonPlay",
        data() {
            return {
                item: this.id,
                states : {
                    play: 'Lecture',
                    download: 'Téléchargé'
                },
                check: true
            }
        },
        props: {
            id: {
              type: Number,
              default: null
            }
        },
        methods: {
            returnId(id) {
              console.log(id)
            },
            checkBDD() {
                // if name is in bdd return goPlay
                //else return false
            },
            goPlay() {
                //send player html 5 and maybe send transcode script before 
                return true
            }
        },
    }
</script>

<style>
.button-lecture {
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 4rem;
    font-weight: bold;
    font-size: 1.6rem ;
    transition: 200ms;
}
.button-lecture {
  background: #fff;
  color: var(--color-txt-dark);
  margin-right: 2rem;
}
.button-lecture:hover {
  background: var(--color-txt-hover);
}
@media screen and (max-width: 780px) {
    .button-lecture {
        padding: 0.5em 2em;
        font-size: 1.2rem;
        margin-bottom: 5rem;
    }
}

</style>