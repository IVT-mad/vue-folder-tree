<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <header>
        <h3>{{ title }}</h3>
      </header>
      <div class="modal-content">
        <slot />
      </div>
      <footer>
        <button @click="ok">Ок</button>
        <button @click="close">Закрыть</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  emits: ['close', 'ok'],
  setup(_, { emit }) {
    const close = () => emit('close');
    const ok = () => emit('ok');
    return { close, ok };
  },
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  animation: fadeIn 0.3s ease;
}

.modal header {
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.modal footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>