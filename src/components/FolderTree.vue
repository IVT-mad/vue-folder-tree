<template>
  <ul>
    <FolderTreeNode
        v-for="folder in folders"
        :key="folder.id"
        :folder="folder"
        :selected="selected"
        @select="handleSelect"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import FolderTreeNode from './FolderTreeNode.vue';

export default defineComponent({
  name: 'FolderTree',
  props: {
    folders: {
      type: Array as PropType<
          { id: number; name: string; children: any[] }[]
      >,
      required: true,
    },
    selected: {
      type: Number,
      required: false,
    },
  },
  emits: ['select'],
  setup(_, { emit }) {
    const handleSelect = (id: number) => emit('select', id);
    return { handleSelect };
  },
  components: { FolderTreeNode },
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 5px 0;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

li:hover {
  background-color: #f0f0f0;
}

li.selected {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

button {
  font-size: 14px;
  padding: 2px 8px;
  margin-left: 10px;
}
</style>