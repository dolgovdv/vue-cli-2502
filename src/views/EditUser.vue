<template>
  <div>
    <div>Edit Users {{ id }}</div>
    <user-form v-if="user" :user="user"></user-form>
    <div v-else class="alert alert-warning" role="alert">
      Данные не загружены.
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  name: 'EditUserPage',
  components: {
    UserForm
  },
  data: function() {
    return {
      user: null,
      userDownload: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted: function() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3030/users/' + this.id)
        .then(response => response.data)
        .then(response => {
          this.user = response
          this.userDownload = true
          // console.log('users', this.users)
        })
    }
  }
}
</script>
