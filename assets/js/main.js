// Section Component
Vue.component('block', {
  template:
    `
      <section>
        <slot></slot>
      </section>
    `
})

// Navigation Component
Vue.component('navigation', {
  template:
    `
    <ul class="menu-list">
      <li class="has-text-centered"><slot></slot></li>
    </ul>
    `
})

Vue.component('project', {
  props: ['visibleLink'],
  template:
    `
    <div class="columns">
      <div class="column is-offset-6">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <slot></slot>
            </figure>
          </div>
          <div class="card-content">
            <h1 class="title">{{ visibleLink }}</h1>

            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, a, laborum adipisci sint repudiandae doloribus quam itaque numquam reiciendis veniam delectus quo rem incidunt sapiente corporis deleniti laudantium officia perferendis!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
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
