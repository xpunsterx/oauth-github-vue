<template>
  <router-link class="user-preview" :to="userLink">
    <b-row align-v="center">
      <b-col cols="6" md="2" class="py-1 text-center">
        <img class="user-preview__avatar" :src="user.avatar_url" :alt="user.login">
      </b-col>
      <b-col cols="6" md="10">
        <p class="user-preview__login">{{ user.login }}</p>
      </b-col>
    </b-row>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Location } from 'vue-router'

export default Vue.extend({
  props: [
    'user'
  ],
  computed: {
    userLink(): Location {
      return {
        name: "user",
        params: {
          id: this.user.login
        }
      }
    }
  }
});
</script>

<style lang="scss">
.user-preview {
  display: block;
  color: var(--bs-black);
  text-decoration: none;

  &:hover {
    background-color: var(--bs-gray-100);
  }

  &__avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  &__login {
    margin: 0;
  }
}
</style>
