<template>
  <b-container>
    <UserFullItem />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import UserFullItem from '@/components/UserFullItem.vue'

export default Vue.extend({
  components: {
    UserFullItem
  }
});
</script>
