<template>
    <div class="container">
        <div class="row">
            <nav :class="{change_color : scrollPosition > 50}" class="nav">
                <div class="nav-link">
                    <img class="logo" src="@/assets/img/logo.jpg" alt="">
                    <ul v-for="(item , key) in nav" :key="key">
                        <li><NuxtLink :to="item.path.toLowerCase()">{{ item.name }}</NuxtLink></li>
                    </ul>
                </div>
                <div class="nav-parameter">
                    <Logout />
                    <Avatar />
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import Logout from './Logout.vue';
import Avatar from './Avatar.vue';
    export default {
  components: { Logout, Avatar },
        name: 'Nav',
        data() {
            return {
                nav: [
                    {name: 'Accueil', path: "/"}, 
                    {name: 'Series', path: "/series"},
                    {name: 'Films', path: "/movies"},
                    {name: 'Ma ptite list', path: "/wishlist"}
                ],
                scrollPosition: null
            }
        },
    methods: {
      scrollNav() {
        this.scrollPosition = window.scrollY
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollNav);
    },
    }
</script>

<style>
.change_color {
    background:var(--color-fond)!important;
}
.nav {
    position: fixed;
    z-index: 1001;
    margin: var();
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    right: 0;
    background: transparent;
    transition: 200ms;
    padding: 1rem;
}
.nav .logo {
    background: red;
    width : 100px;
}
.nav ul {
    display: inline-flex;

}
.nav ul li {
    list-style: none;
}
.nav ul a {
    text-decoration: none;
    color: var(--color-text-white);
    margin: 0 2rem;
    font-size: 0.9rem;
    font-weight: bold;
    transition: 200ms;
}
.nav ul a:hover {
    color: var(--color-txt-hover);
}
.nav-link {

}
.nav-parameter {
    display: inline-flex;
    align-items: center;
}
@media screen and (max-width: 780px) {
    .nav {
        top: inherit;
        bottom: 0!important;
        padding: 0;
        background-color: var(--color-fond)!important;
        display: flex;
        justify-content: center;
    }
    .nav .logo {
        display: none;
    }
    .nav ul {
        margin: 0;
        padding: 1rem;
    }
    .nav ul li a{
        text-decoration: none;
        color: var(--color-text-white);
        margin: 0rem;
        font-size: 0.8rem;
    }
    
    
}
</style>