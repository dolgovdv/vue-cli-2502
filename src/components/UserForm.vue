<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input v-model="localUser.firstName" type="text" class="form-control" />
      <pre>{{ user.firstName }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      localUser: {}
    }
  },
  created() {
    // Копируем пользователя в локальное состояние
    this.localUser = Object.assign({}, this.user)
    // console.log('this.localUser = ', this.localUser)
  }
}
</script>
