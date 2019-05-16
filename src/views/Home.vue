<template>
  <div class="home">
    <h1>Список пользователей {{ countList }}</h1>
    <!-- кнопка скрытия таблицы -->
    <button type="button" class="btn btn-outline-primary" @click="changeShow">
      {{ changeTextButton }}
    </button>
    <!-- условие отображения списка -->
    <template v-if="show">
      <users-table
        :users="list"
        @remove-user="removeFromList"
        @user-edit="editUserMain"
      ></users-table>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    'users-table': () => import('@/components/UserTable.vue')
  },
  data: function() {
    return {
      list: [], // список пользователей
      show: true, // отображение таблицы
      editData: '',
      queryHome: 'http://localhost:3030/users/'
    }
  },
  computed: {
    // количество пользователей
    countList: function() {
      return this.list.length
    },
    changeTextButton: function() {
      // смена названия кнопки
      return this.show === true ? 'hidden' : 'show list'
    }
  },
  watch: {
    list: function() {
      console.log('list change')
    }
  },
  mounted: function() {
    this.loadUsers()
  },
  methods: {
    // получение списка пользователей
    loadUsers() {
      axios
        .get('http://localhost:3030/users/')
        .then(response => response.data)
        .then(response => {
          this.list = response
        })
    },
    // изменение отображения компонента
    changeShow: function() {
      this.show = !this.show
    },
    // удаление пользователя
    removeFromList: function(id) {
      this.list = this.list.filter(function(item) {
        return item.id !== id
      })
    },
    // внесение изменений в данные пользователя
    editUserMain: function(listItem) {
      this.show = false
      this.edit = true
      this.editData = listItem
    }
  }
}
</script>
