<template>
  <div :class="$style.dayoftheweek">{{ dayOfTheWeek }}</div>
</template>

<script>
import getDayOfTheWeek from '../../utils/getDayOfTheWeek';

export default {
  props: {
    dayOfTheWeekIndex: {
      type: Number,
      default: 0,
    },
  },
  setup({ dayOfTheWeekIndex }) {
    const dayOfTheWeek = getDayOfTheWeek(dayOfTheWeekIndex);
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
