<template>
  <div class="home">
    <h1>Список пользователей {{ countList }}</h1>
    <!-- кнопка скрытия таблицы -->
    <button type="button" v-on:click="changeShow" class="btn btn-outline-primary">
      {{ changeTextButton }}
    </button>
    <!-- условие отображения списка -->
    <template v-if="show">
      <users-table
        v-bind:users="list"
        v-on:remove-user="removeFromList"
        v-on:user-edit="editUserMain"
      ></users-table>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import UserTable from '@/components/UserTable.vue'

const list = [
  {
    id: 1,
    firstName: 'Иван',
    secondName: 'Иванович',
    surName: 'Иванов',
    avatar: 'http://www.avatar-mix.ru/avatars_64x64/440.jpg'
  },
  { id: 2, firstName: 'Петр', secondName: 'Петрович', surName: 'Петров', avatar: '' },
  {
    id: 3,
    firstName: 'Иван',
    secondName: 'Иванович',
    surName: 'Иванов',
    avatar: 'http://www.avatar-mix.ru/avatars_64x64/440.jpg'
  },
  {
    id: 4,
    firstName: 'Иван',
    secondName: 'Иванович',
    surName: 'Иванов',
    avatar: 'http://www.avatar-mix.ru/avatars_64x64/440.jpg'
  },
  { id: 5, firstName: 'Иван', secondName: 'Иванович', surName: 'Иванов', avatar: '' }
]

export default {
  name: 'home',
  components: {
    'users-table': UserTable
  },
  data: function() {
    return {
      list: [], // список пользователей
      show: true, // отображение таблицы
      edit: false, //  отображение формы редактирования
      editData: '',
      textButton: ''
    }
  },
  computed: {
    // количество пользователей
    countList: function() {
      return this.list.length
    },
    changeTextButton: function() {
      // смена названия кнопки
      if (this.show === true) {
        return 'hidden'
      } else {
        return 'show list'
      }
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
      console.log('removeFromList = ', id)
      this.list = this.list.filter(function(item) {
        return item.id !== id
      })
    },
    editUserMain: function(listItem) {
      this.show = false
      this.edit = true
      this.editData = listItem
      console.log('editData = ', this.editData)
    }
  },
  mounted: function() {
    this.list = list
  }
}
</script>
