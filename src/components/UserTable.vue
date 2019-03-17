<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>
            id
          </th>
          <th>
            Имя
          </th>
          <th>
            Фамилия
          </th>
          <th>
            Доступ
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
            <router-link :to="'/edit/' + listItem.id"># {{ listItem.id }} </router-link>
          </td>
          <td>
            {{ listItem.firstName }}
          </td>
          <td>
            {{ listItem.lastName }}
          </td>
          <td>
            {{ listItem.accessLevel }}
          </td>
          <td>
            <img :src="changeAvatarShow(listItem.picture)" alt="not" />
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
    changeAvatarShow: function(avatarLink) {
      return avatarLink || 'http://www.avatar-mix.ru/avatars_64x64/289.jpg'
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
