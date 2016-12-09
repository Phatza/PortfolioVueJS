// Navigation Component
Vue.component('navigation', {
  props:['links'],
  template:
    `
    <ul class="menu-list">
      <li class="has-text-centered" v-for="link in links">
        <a @click="currentLink(link)" href="javascript:;" :class="{'active' : visibleLink === link}">{{ link }}</a>
      </li>
    </ul>
    `,
  methods: {
    currentLink(elem) {
      this.$parent.visibleLink = elem
    }
  },
  computed: {
    visibleLink() {
      return this.$parent.visibleLink
    }
  }
})

// Project Section Component
Vue.component('project', {
  template:
    `
    <div class="columns">
      <div class="column is-offset-6">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <slot name="img"></slot>
            </figure>
          </div>
          <div class="card-content">
            <h1 class="title">{{ visibleLink }}</h1>

            <div class="content">
              <slot name="desc"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
  data() {
    return {
      visibleLink: this.$parent.visibleLink
    }
  }
})

// WP Project Component
Vue.component('wordpress', {
  template:
    `
    <div class="columns">
      <div class="column is-one-third" v-for='site in wpSites'>
        <<div class="card">
          <div class="card-image">
            <figure class="image is-3by2">
              <img :src="site.image" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h2>{{ site.title }}</h2>
              <a :href="site.url" class="button">Accèdez au site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
    data() {
      return {
        wpSites: {
          bettina: {
            title: 'Bettina',
            image: 'http://placehold.it/300x225',
            url: 'http://fldslld'
          },
          bastide: {
            title: 'Bastide',
            image: 'http://placehold.it/300x225',
            url: 'http://fldslld'
          },
          purjus: {
            title: 'Purjus',
            image: 'http://placehold.it/300x225',
            url: 'http://fldslld'
          },
          bateauGitePorquerolles: {
            title: 'Fa\'auva',
            image: 'http://placehold.it/300x225',
            url: 'http://fldslld'
          },
          couleurSoleil: {
            title: 'Couleur Soleil',
            image: 'http://placehold.it/300x225',
            url: 'http://fldslld'
          },
          Cellois: {
            title: 'Le Cellois',
            image: 'http://placehold.it/300x225',
            url: 'http://fldslld'
          }
        }
      }
    }
})

// Instance VueJS
let app = new Vue({
  el: '#app',
  data: {
    links: ['A Propos', 'Keep Calm', 'Ma Petite Poulette', 'Boogie Man', 'Sites Wordpress'],
    visibleLink: 'A Propos',
    mobileMenuVisible: false
  },
  methods: {
    // Toggle show/hide Menu Mobile & Tablet Devices
    isToggle() {
      this.mobileMenuVisible = !this.mobileMenuVisible
    }
  }
})
