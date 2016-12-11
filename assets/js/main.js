// Navigation Component
Vue.component('navigation', {
  props:['links'],
  template:
    `
    <ul class="menu-list">
      <li class="has-text-centered" v-for="link in links">
        <a @click="currentLink(link), mobileMenuVisible" href="javascript:;" :class="{'active' : visibleLink === link}">{{ link }}</a>
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
    },
    mobileMenuVisible() {
      return  this.$parent.mobileMenuVisible = !this.$parent.mobileMenuVisible
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
            <slot name="video"></slot>
            <slot name="img"></slot>
          </div>
          <div class="card-content">
            <h1 class="title">{{ visibleLink }}</h1>

            <slot name="desc"></slot>

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
      <div class="column is-one-third" v-for="site in wpSites">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img :src="site.image" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h2>{{ site.title }}</h2>
              <a :href="site.url" :title="'lien vers ' + site.title" target="_blank" class="button">Accèdez au site</a>
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
            title: 'Bettina Vermillon',
            image: 'assets/img/situation/bettina-situation.jpg',
            url: 'http://www.bettinavermillon.com/'
          },
          bastide: {
            title: 'Bastide',
            image: 'assets/img/situation/bastide-situation.jpg',
            url: 'http://www.bastide-du-tinal.com/'
          },
          purjus: {
            title: 'Purjus',
            image: 'assets/img/situation/purjus-situation.jpg',
            url: 'http://dev.purjus.fr/'
          },
          bateauGitePorquerolles: {
            title: 'Fa\'auva',
            image: 'assets/img/situation/bateau-situation.jpg',
            url: 'http://www.bateau-gite-porquerolles.fr/'
          },
          couleurSoleil: {
            title: 'Couleur Soleil',
            image: 'assets/img/situation/couleur-situation.jpg',
            url: 'http://www.couleursoleil-uv.fr/'
          },
          Cellois: {
            title: 'Le Cellois',
            image: 'assets/img/situation/cellois-situation.jpg',
            url: 'http://www.celloishandball.fr/'
          }
        }
      }
    }
})

Vue.component('social', {
  template:
    `
    <div class="social">
      <a :href="social.url" v-for="social in socials">
        <span class="icon">
          <i :class="'fa fa-'+ social.name"></i>
        </span>
      </a>
    <div>
    `,
  data() {
    return {
      socials: {
        twitter: {
          name: 'twitter',
          url: 'https://twitter.com/BricePhatza'
        },
        github: {
          name: 'github',
          url: 'https://github.com/Phatza'
        },
        linkedin: {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/bricehpc'
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
