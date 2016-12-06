// My test component
Vue.component('block', {
  template:
    `
      <div>
        <p><slot></slot></p>
      </div>
    `
})

Vue.component('block1', {
  template:
    `
      <div>
        <p><slot></slot></p>
      </div>
    `
})

Vue.component('block2', {
  template:
    `
      <div>
        <p><slot></slot></p>
      </div>
    `
})

Vue.component('responsive-menu', {
  template:
    `
    <div class="responsiveMenu">
      <ul class="menu-list">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Customers</a></li>
      </ul>
    </div>
    `
})




// Instance VueJS
let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    visible: true,
    mobileMenuVisible: false
  },
  methods: {
    isActive() {
      this.visible = !this.visible
    },
    isToggle() {
      this.mobileMenuVisible = !this.mobileMenuVisible
    }
  }
})
