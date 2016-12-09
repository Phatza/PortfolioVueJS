// Navigation Component
Vue.component('navigation', {
  props:['links'],
  template:
    `
    <ul class="menu-list">
      <li class="has-text-centered" v-for="link in links">
        <a @click="currentLink(link)" href="javascript:;" :class="{'is-active' : visibleLink === link}" :data-hover="link">{{ link }}</a>
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
              <a :href="site.url" class="button">
                <span class="icon">
                <svg height="25px" width="25px" viewBox="0 0 30 30">
                  <path fill="#666" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                </span>
                <span>Accèdez au site</span>
              </a>
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
