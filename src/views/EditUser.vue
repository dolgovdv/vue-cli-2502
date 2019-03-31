<template>
  <div>
    <div>Edit Users {{ id }}</div>
    <user-form v-if="user1" :user2="user1"></user-form>
    <div v-else class="alert alert-warning" role="alert">
      Данные не загружены.
    </div>
    <connect-db :query="queryEditUser" @connect-db="UserDataDB" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import connectToDb from '@/components/ConnectToDB.vue'

export default {
  name: 'EditUserPage',
  components: {
    'user-form': UserForm,
    'connect-db': connectToDb
  },
  data: function() {
    return {
      user1: null,
      userDownload: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    queryEditUser() {
      return 'http://localhost:3030/users/' + this.id
    }
  },
  methods: {
    UserDataDB(data) {
      this.user1 = data
      if (this.user1) {
        this.userDownload = true
      }
    }
  }
}
</script>
