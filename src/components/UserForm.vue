<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input v-model="localUser.firstName" type="text" class="form-control" />
      <pre>{{ user2.firstName }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersForm',
  props: {
    user2: {
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
    this.localUser = Object.assign({}, this.user2)
    // console.log('this.localUser = ', this.localUser)
  }
}
</script>
