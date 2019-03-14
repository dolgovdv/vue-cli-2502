<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>
            id
          </th>
          <th>
            Имя
          </th>
          <th>
            Отчество
          </th>
          <th>
            Фамилия
          </th>
          <th>
            Аватар
          </th>
          <th>
            Редактирование пользователя
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="listItem in users" :key="listItem.id">
          <td>
            <button type="button" @click="removeUser(listItem.id)"># {{ listItem.id }}</button>
          </td>
          <td>
            {{ listItem.firstName }}
          </td>
          <td>
            {{ listItem.secondName }}
          </td>
          <td>
            {{ listItem.surName }}
          </td>
          <td>
            <img :src="changeAvatarShow(listItem.avatar)" alt="not" />
          </td>
          <td>
            <button type="button" @click="editUser(listItem)">
              editUser
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserTable',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    // колличество пользователей
    countList: function() {
      return this.users.length
    }
  },
  methods: {
    // проверка аватарки и замена на значение по умолчанию
    changeAvatarShow: function(av) {
      if (av === '') {
        av = 'http://www.avatar-mix.ru/avatars_64x64/289.jpg'
      }
      return av
    },
    removeUser: function(id) {
      console.log('removeUser =', id)

      this.$emit('remove-user', id)
    },
    editUser: function(listItem) {
      this.$emit('user-edit', listItem)
    }
  }
}
</script>
