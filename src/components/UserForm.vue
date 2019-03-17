<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input v-model="localUser.firstName" type="text" class="form-control" />
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
      localUser: null
    }
  },
  watch: {
    // При изменении локального состояния
    // отправляем объект наверх
    localUser: {
      deep: true,
      handler() {
        this.$emit('input', this.localUser)
      }
    }
  },
  created() {
    // Копируем пользователя в локальное состояние
    this.localUser = Object.assign({}, this.user)
  }
}
</script>
