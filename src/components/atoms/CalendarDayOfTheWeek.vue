<template>
  <div :class="$style.dayoftheweek">{{ dayOfTheWeek }}</div>
</template>

<script setup>
import getDayOfTheWeek from '../../utils/getDayOfTheWeek';

const props = defineProps({
  dayOfTheWeekIndex: {
    type: Number,
    default: 0,
  },
});
const dayOfTheWeek = getDayOfTheWeek(props.dayOfTheWeekIndex);
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
