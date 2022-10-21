<template>
  <div class="users">
    <div class="users__header fixed-top px-2 py-3">
      <b-form-input id="input-large" size="lg" placeholder="Enter user name" v-model="searchValue"></b-form-input>
    </div>

    <div class="users__content" v-if="userList.length">
      <UserPreviewItem v-for="user in userList" :key="user.id" :user="user" />
      <infinite-loading @infinite="infiniteHandler">
        <div slot="spinner"><b-spinner /></div>
        <div slot="no-more">No more users</div>
      </infinite-loading>
    </div>

    <div class="users__empty" v-else>
      <p v-if="!!searchValue">No search results</p>
      <b-spinner v-else />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import UserPreviewModel from '@/models/UserPreviewModel'
import UserPreviewItem from '@/components/UserPreviewItem.vue'

const PER_PAGE = 30

interface DataInterface {
  users: UserPreviewModel[];
  since: number;
  searchValue: string;
}

export default Vue.extend({
  components: {
    UserPreviewItem
  },
  data: (): DataInterface => {
    return {
      users: [],
      since: 0,
      searchValue: ''
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
    async getUsers(): Promise<number> {
      const result = await this.fetchUsers({
        per_page: PER_PAGE,
        since: this.since
      })
      this.addUsers(result.data)

      return result.data.length
    },
    async infiniteHandler($state: any): Promise<void> {
      const result = await this.getUsers()
      result > 0 ? $state.loaded() : $state.complete()
    },
    addUsers(list: UserPreviewModel[]): void {
      list.forEach(user => {
        if (this.since < user.id) {
          this.since = user.id
        }
        this.users.push(user)
      })
    }
  },
  computed: {
    userList() {
      return this.searchValue ? this.users.filter(user => user.login.includes(this.searchValue)) : this.users
    }
  }
});
</script>

<style lang="scss">
.users {
  &__header {
    background: #fff;
    box-shadow: 0 0 3px 0 #ddd;
  }

  &__content {
    margin-top: 7rem;
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

