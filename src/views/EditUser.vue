<template>
  <div>
    <div>Edit Users {{ id }}</div>
    <div v-if="!user" class="alert alert-warning" role="alert">
      Данные не загружены.
    </div>
    <user-form v-else :userdata="user" @edit-user="editUserMain"></user-form>
  </div>
</template>

<script>
import userForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  name: 'EditUserPage',
  components: {
    'user-form': userForm
  },
  data: function() {
    return {
      user: null
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
  mounted: function() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get(this.queryEditUser)
        .then(response => response.data)
        .then(data => {
          this.user = data
          // console.log('users', this.users)
        })
    },
    editUserMain(data) {
      this.user = data
    }
  }
}
</script>
