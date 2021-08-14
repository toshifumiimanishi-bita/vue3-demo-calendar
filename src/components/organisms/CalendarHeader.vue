<template>
  <header :class="$style.header">
    <CalendarTodayButton @init:date="handleDateInit" />
    <CalendarNavigation :class="$style.headerr_nav" @prev="handlePrev" @next="handleNext" />
    <CalendarTitle :current-year="currentYear" :current-month="currentMonth" />
  </header>
</template>

<script setup>
import CalendarTitle from '../atoms/CalendarTitle.vue';
import CalendarTodayButton from '../atoms/CalendarTodayButton.vue';
import CalendarNavigation from '../molecules/CalendarNavigation.vue';

const props = defineProps({
  currentYear: {
    type: Number,
    default: 0,
  },
  currentMonth: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits({
  'init:date': null,
  prev: null,
  next: null,
});
const handleDateInit = () => {
  emit('init:date');
};
const handlePrev = () => {
  emit('prev');
};
const handleNext = () => {
  emit('next');
};
</script>

<style lang="scss" module>
.header {
  align-items: center;
  border-bottom: 1px solid #dadce0;
  display: flex;
  padding: 16px;
}

.headerr_nav {
  margin-left: 32px;
}
</style>
