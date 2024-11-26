<template>
  <li>
    <div @click="select" :class="{ selected: isSelected }">
      {{ folder.name }}
      <button v-if="folder.children.length" @click.stop="toggle">
        {{ isOpen ? '−' : '+' }}
      </button>
    </div>
    <ul v-if="isOpen">
      <FolderTreeNode
          v-for="child in folder.children"
          :key="child.id"
          :folder="child"
          :selected="selected"
          @select="select"
      />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from 'vue';

export default defineComponent({
  name: 'FolderTreeNode',
  props: {
    folder: {
      type: Object as PropType<{ id: number; name: string; children: any[] }>,
      required: true,
    },
    selected: {
      type: Number,
      required: false,
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const isOpen = ref(false);
    const isSelected = computed(() => props.selected === props.folder.id);
    const toggle = () => (isOpen.value = !isOpen.value);
    const select = () => emit('select', props.folder.id);

    return { isOpen, toggle, select, isSelected };
  },
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