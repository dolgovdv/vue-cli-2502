<template>
  <div>
    <!-- item template -->
    <li>
      <div :class="{ bold: isFolder }" @click="toggle" @dblclick="makeFolder">
        {{ item.name }}
        <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
      </div>
      <ul v-show="isOpen" v-if="isFolder">
        <user-tree
          v-for="(child, index) in item.children"
          :key="index"
          class="item"
          :item="child"
          @make-folder="$emit('make-folder', $event)"
          @add-item="$emit('add-item', $event)"
        ></user-tree>
        <li class="add" @click="$emit('add-item', item)">+</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'UserTree',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder: function() {
      return this.item.children && this.item.children.length
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder: function() {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  }
}
</script>

<style>
.bold {
  font-weight: bold;
}
.item {
  cursor: pointer;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
