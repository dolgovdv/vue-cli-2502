<template>
  <div>
    <div>Edit Users {{ id }}</div>
    <user-form :user="user"></user-form>
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
      user: {}
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
        .then(user => {
          this.user = user
          // console.log('users', this.users)
        })
    }
  }
}
</script>
