<template>
  <div :class="[$style.day, calendarDayClasses]">{{ day }}</div>
</template>

<script setup>
import { computed, useCssModule } from 'vue';

const props = defineProps({
  day: {
    type: Number,
    default: 0,
    required: true,
  },
  isToday: {
    type: Boolean,
    default: false,
  },
});
const style = useCssModule();
const calendarDayClasses = computed(() => {
  return {
    [style['is-today']]: props.isToday,
  };
});
</script>

<style lang="scss" module>
.day {
  font-size: 12px;
  line-height: 1;
  padding: 5px 0;
  text-align: center;

  &.is-today {
    color: #f00d4f;
    font-weight: bold;
  }
}
</style>