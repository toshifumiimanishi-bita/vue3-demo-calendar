<template>
  <div :class="[$style.day, calendarDayClasses]">{{ day }}</div>
</template>

<script>
import { computed, useCssModule } from 'vue';

export default {
  props: {
    day: {
      type: Number,
      default: 0,
      required: true,
    },
    isToday: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const style = useCssModule();
    const calendarDayClasses = computed(() => {
      return {
        [style['is-today']]: props.isToday,
      };
    });

    return {
      calendarDayClasses,
    };
  },
};
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