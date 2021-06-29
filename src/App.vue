<template>
  <div id="app">
    <SiteNav v-if="showNav"></SiteNav>
<!--    <h1>Love Me Tender, Love Me True</h1> -->
    <router-view />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import SiteNav from '@/components/SiteNav'

export default {
  components: {
    SiteNav
  },
  computed: {
    ..mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  }
}

//following was auto put 
/*import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
})
*/

</script>
