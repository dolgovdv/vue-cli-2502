<template>
  <div />
</template>

<script>
import axios from 'axios'

export default {
  name: 'ConnctToDB',
  props: {
    query: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      list: null
    }
  },
  mounted() {
    this.loadUsers(this.query)
  },
  methods: {
    loadUsers(query) {
      // console.log('connectToDb', query)
      axios
        .get(query)
        .then(response => response.data)
        .then(users => {
          this.list = users
          this.$emit('connect-db', users)
          // console.log('users', this.users)
        })
    }
  }
}
</script>
