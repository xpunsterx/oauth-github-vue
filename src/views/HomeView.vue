<template>
  <b-container>
    <UserList v-if="isAuth" />
    <AuthLink v-else />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthLink from '@/components/AuthLink.vue'
import UserList from '@/components/UserList.vue'
import { mapActions, mapGetters, mapState } from "vuex"

export default Vue.extend({
  components: {
    AuthLink,
    UserList
  },
  async mounted() {
    const code = this.$route.query.code
    if (!code) {
      return
    }

    this.setCode(code)

    if (!this.isAuth) {
      await this.fetchToken()
    }
  },
  methods: {
    ...mapActions('auth', ['setCode', 'fetchToken']),
  },
  computed: {
    ...mapGetters('auth', ['isAuth']),
    ...mapState('auth', ['code']),
  }
});
</script>
