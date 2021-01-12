<template>
  <div :class="$style.dayoftheweek">{{ dayOfTheWeek }}</div>
</template>

<script>
import useDayOfTheWeek from '../../composables/use-day-of-the-week';

export default {
  props: {
    dayOfTheWeekIndex: {
      type: Number,
      default: 0,
    },
  },
  setup({ dayOfTheWeekIndex }) {
    const dayOfTheWeek = useDayOfTheWeek(dayOfTheWeekIndex);
    return {
      dayOfTheWeek,
    };
  },
}
</script>

<style lang="scss" module>
.dayoftheweek {
  font-size: 10px;
  font-weight: normal;
  padding: 5px 0;
  text-align: center;
  width: 100%;
}
</style>
