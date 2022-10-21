<template>
  <div class="auth-link">
    <b-spinner v-if="code" />
    <b-button v-else href="https://github.com/login/oauth/authorize?client_id=6b586ff618ecc59ec12f">
      sign in
    </b-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from "vuex"

export default Vue.extend({
  computed: {
    ...mapState('auth', ['code']),
  }
});
</script>

<style lang="scss">
.auth-link {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
