// Navigation Component
Vue.component('navigation', {
  props:['links'],
  template:
    `
    <ul class="menu-list">
      <li class="has-text-centered" v-for="link in links">
        <a @click="currentLink(link)" href="javascript:;">{{ link }}</a>
      </li>
    </ul>
    `,
  methods: {
    currentLink(link) {
      this.$parent.visibleLink = link
    }
  }
})

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

// Instance VueJS
let app = new Vue({
  el: '#app',
  data: {
    links: ['A Propos', 'Keep Calm', 'Ma Petite Poulette', 'Boogie Man', 'Sites Wordpress'],
    visibleLink: 'A Propos',
    mobileMenuVisible: false
  },
  methods: {
    isActive() {
      this.displayNone = !this.displayNone
    },
    // Toggle show/hide Menu Mobile & Tablet Devices
    isToggle() {
      this.mobileMenuVisible = !this.mobileMenuVisible
    }
  }
})
