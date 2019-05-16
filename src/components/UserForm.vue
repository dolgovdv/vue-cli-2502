<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input v-model="localUser.firstName" type="text" class="form-control" @blur="editUser()" />
      <label>Фамилия</label>
      <input v-model="localUser.lastName" type="text" class="form-control" />
      <label>Телефон</label>
      <input v-model="localUser.phone" type="tel" class="form-control" />
      <label>Электронная почта</label>
      <input v-model="localUser.email" type="email" class="form-control" />
      <label>Уровень доступа</label>
      <input v-model="localUser.accessLevel" type="text" class="form-control" />
      <label>Дата регистрации</label>
      <input v-model="localUser.registered" type="datetime" class="form-control" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersForm',
  model: {
    prop: 'userdata',
    event: 'edit-user'
  },
  props: {
    userdata: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      localUser: {}
    }
  },
  watch: {
    // При изменении локального состояния
    // отправляем объект наверх
    localUser: {
      deep: true,
      handler: 'editUser'
    }
  },
  created() {
    // Копируем пользователя в локальное состояние
    this.localUser = Object.assign({}, this.userdata)
  },
  methods: {
    editUser: function() {
      this.$emit('edit-user', this.localUser)
    }
  }
}
</script>
