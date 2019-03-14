<template>
  <div class="about">
    <h1>Tree</h1>
    <ul id="demo">
      <user-tree class="item" :item="treeData" @make-folder="makeFolder" @add-item="addItem">
      </user-tree>
    </ul>
    <!-- the demo root element -->
  </div>
</template>

<script>
import UserTree from '@/components/UserTree.vue'
import Vue from 'vue'

// demo data
const treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        }
      ]
    }
  ]
}

export default {
  name: 'Tree',
  components: {
    'user-tree': UserTree
  },
  data: function() {
    return {
      treeData: treeData
    }
  },
  methods: {
    makeFolder: function(item) {
      Vue.set(item, 'children', [])
      this.addItem(item)
    },
    addItem: function(item) {
      item.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>

<style>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
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
