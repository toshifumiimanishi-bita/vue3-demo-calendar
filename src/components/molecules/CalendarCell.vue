<template>
  <div :class="[$style.cell, calendarCellClasses]">
    <slot></slot>
  </div>
</template>

<script setup>
import { useCssModule } from 'vue';

const props = defineProps({
  calendarData: {
    type: Object,
    default: () => ({}),
  },
});
const style = useCssModule();
const { isThisMonth } = props.calendarData;
const calendarCellClasses = {
  [style['is-thismonth']]: isThisMonth,
};
</script>

<style lang="scss" module>
.cell {
  padding: 4px;
  width: 100%;
  background-color: var(--cell-background-color);

  &:not(.is-thismonth) {
    background-color: var(--cell-background-color-disabled);
  }
}
</style>
