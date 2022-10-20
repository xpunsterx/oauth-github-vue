<template>
  <div class="user">
    <template v-if="userData && userRepo.length">
      <b-row align-v="center" class="py-4">
        <b-col class="text-center">
          <img class="user__avatar" :src="userData.avatar_url" :alt="userData.login">
        </b-col>
      </b-row>
      <b-table striped hover :items="importantInfo" />
      <h5>Repositories</h5>
      <b-table striped hover :items="repoList" />
    </template>

    <div class="user__empty" v-else>
      <b-spinner />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from "vuex";
import UserFullModel from "@/models/UserFullModel";
import axios from "@/axios-instance";

interface DataInterface {
  userData: UserFullModel;
  userRepo: any[];
}

export default Vue.extend({
  data: (): DataInterface => {
    return {
      userData: new UserFullModel(),
      userRepo: []
    }
  },
  async mounted() {
    const userResponse = await this.fetchUser(this.$route.params.id)
    this.userData = userResponse.data
    const repoResponse = await axios.get(this.userData.repos_url)
    this.userRepo = repoResponse.data
  },
  methods: {
    ...mapActions('users', ['fetchUser']),
  },
  computed: {
    importantInfo() {
      const { name, location, email, followers, following, created_at, public_repos } = this.userData

      return [{ name, location, email, followers, following, created_at, public_repos}]
    },
    repoList() {
      return this.userRepo.map(repo => {
        const { name, language, stargazers_count } = repo
        return {
          name, language, stargazers_count
        }
      })
    }
  }
});
</script>

<style lang="scss">
.user {
  &__avatar {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }

  &__empty {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
