<template>
  <AppModal class="modal" :is-visible="isVisible">    
    <div>
      <div :class="$style.modal_dayoftheweek">{{ dayOfTheWeek }}</div>
      <div :class="$style.modal_day">{{ day }}</div>
      <div :class="$style.modal_list">
        <CalendarTaskBadge
          v-for="task in tasks[currentDate]"
          :key="task.id"
          :class="$style.modal_badge"
          :task-id="task.id"
          :task-name="task.name"
          @remove="handleRemove"
        />
      </div>
    </div>
  </AppModal>
</template>

<script setup>
import { computed } from 'vue';
import CalendarTaskBadge from '../atoms/CalendarTaskBadge.vue';
import AppModal from './AppModal.vue';
import getDayOfTheWeek from '../../utils/getDayOfTheWeek';

const props = defineProps({
  currentDate: {
    type: String,
    default: '',
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
    required: true,
  },
  tasks: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
const emit = defineEmits({
  remove: (taskId) => typeof taskId === 'string',
});
const date = computed(() => {
  return new Date(props.currentDate);
});
const dayOfTheWeek = computed(() => {
  return getDayOfTheWeek(date.value.getDay());
});
const day = computed(() => {
  return date.value.getDate();
});
const handleRemove = (taskId) => {
  emit('remove', taskId);
};
</script>

<style lang="scss" module>
.modal_dayoftheweek {
  font-size: 10px;
  text-align: center;
}

.modal_day {
  font-size: 10px;
  text-align: center;
}

.modal_list {
  margin-top: 12px;
  max-height: 100px;
  overflow-y: auto;
}

.modal_badge {
  + .modal_badge {
    margin-top: 4px;
  }
}
</style>