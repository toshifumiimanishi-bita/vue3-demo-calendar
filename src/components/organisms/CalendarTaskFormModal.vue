<template>
  <AppModal :is-visible="isVisible" @hide="$emit('hide')">
    <p :class="$style.modal_title">{{ modalTitle }}</p>
    <CalendarTaskForm @save="handleTaskSave" />
    <button
      :class="$style.modal_closebutton"
      type="button"
      aria-label="close"
      @click="$emit('hide')"
    >×</button>
  </AppModal>
</template>

<script>
import CalendarTaskForm from '../molecules/CalendarTaskForm.vue';
import AppModal from './AppModal.vue';

export default {
  components: {
    CalendarTaskForm,
    AppModal,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
      required: true,
    },
    modalTitle: {
      type: String,
      default: '',
      required: true,
    },
  },
  emits: {
    save: (newTaskName) => true,
    hide: null,
  },
  setup(props, { emit }) {
    const handleTaskSave = (newTaskName) => {
      emit('save', newTaskName);
      emit('hide');
    };
    return {
      handleTaskSave,
    };
  },
}
</script>

<style lang="scss" module>
.modal_title {
  font-size: 15px;
  margin-bottom: 24px;
  text-align: center;
}

.modal_closebutton {
  position: absolute;
  right: 6px;
  top: 6px;
  width: 40px;
}
</style>
