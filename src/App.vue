<template>
  <div>
    <button @click="openModal">Открыть</button>
    <Modal
        v-if="isModalOpen"
        title="Выберите папку"
        @close="closeModal"
        @ok="confirmSelection"
    >
      <FolderTree
          :folders="folders"
          :selected="selectedFolder"
          @select="setSelectedFolder"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Modal from './components/Modal.vue';
import FolderTree from './components/FolderTree.vue';
import { mockFolders } from './mockFolders';

export default defineComponent({
  name: 'App',
  components: { Modal, FolderTree },
  setup() {
    const isModalOpen = ref(false);
    const folders = ref(mockFolders);
    const selectedFolder = ref<number | null>(null);

    const openModal = () => (isModalOpen.value = true);
    const closeModal = () => (isModalOpen.value = false);
    const setSelectedFolder = (id: number) => (selectedFolder.value = id);
    const confirmSelection = () => {
      console.log('Selected Folder ID:', selectedFolder.value);
      closeModal();
    };

    return {
      isModalOpen,
      folders,
      selectedFolder,
      openModal,
      closeModal,
      setSelectedFolder,
      confirmSelection,
    };
  },
});
</script>

<style scoped>
button {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>