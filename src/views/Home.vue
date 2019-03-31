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
    <connect-db :query="queryHome" @connect-db="UserFromDB" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserTable from '@/components/UserTable.vue'
import connectToDb from '@/components/ConnectToDB.vue'

export default {
  name: 'Home',
  components: {
    'users-table': UserTable,
    'connect-db': connectToDb
  },
  data: function() {
    return {
      list: [], // список пользователей
      show: true, // отображение таблицы
      edit: false, //  отображение формы редактирования
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
  methods: {
    // изменение отображения таблицы
    changeShow: function() {
      this.show = !this.show
      this.edit = !this.show
    },
    removeFromList: function(id) {
      // console.log('removeFromList = ', id)
      this.list = this.list.filter(function(item) {
        return item.id !== id
      })
    },
    editUserMain: function(listItem) {
      this.show = false
      this.edit = true
      this.editData = listItem
      // console.log('editData = ', this.editData)
    },
    UserFromDB(data) {
      // console.log('UserFromDB', data)
      this.list = data
    }
  }
}
</script>
