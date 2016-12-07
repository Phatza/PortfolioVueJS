// My test component
Vue.component('block', {
  porps: ['visible'],
  template:
    `
      <section>
        <slot></slot>
      </section>
    `
})

// Instance VueJS
let app = new Vue({
  el: '#app',
  data: {
    links: ['A Propos', 'Keep Calm', 'Ma Petite Poulette', 'Boogie Man', 'Sites Wordpress'],
    visible: 'A Propos',
    mobileMenuVisible: false
  },
  methods: {
    isActive() {
      this.visible = !this.visible
    },
    // Toggle show/hide Menu Mobile & Tablet Devices
    isToggle() {
      this.mobileMenuVisible = !this.mobileMenuVisible
    }
  }
})
