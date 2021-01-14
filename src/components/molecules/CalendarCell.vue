<template>
  <div :class="[$style.cell, calendarCellClasses]">
    <slot></slot>
  </div>
</template>

<script>
import { useCssModule } from 'vue';

export default {
  props: {
    calendarData: {
      type: Object,
      default: () => ({}),
    },
  },
  setup({ calendarData }) {
    const style = useCssModule();
    const { isThisMonth } = calendarData;
    const calendarCellClasses = {
      [style['is-thismonth']]: isThisMonth,
    };
    return {
      calendarCellClasses,
    };
  },
}
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
