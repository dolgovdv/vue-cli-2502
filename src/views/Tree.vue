<template>
  <div class="about">
    <h1>Tree</h1>
    <user-tree></user-tree>
  </div>
</template>

<script>
import UserTree from '@/components/UserTree.vue'

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
      UserTree.set(item, 'children', [])
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
