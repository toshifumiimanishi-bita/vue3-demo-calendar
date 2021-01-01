<template>
  <header :class="$style.header">
    <CalendarTodayButton @init:date="handleDateInit" />
    <CalendarNavigation :class="$style.headerr_nav" @prev="handlePrev" @next="handleNext" />
    <CalendarTitle :current-year="currentYear" :current-month="currentMonth" />
  </header>
</template>

<script>
import CalendarTitle from '../atoms/CalendarTitle.vue';
import CalendarTodayButton from '../atoms/CalendarTodayButton.vue';
import CalendarNavigation from '../molecules/CalendarNavigation.vue';

export default {
  components: {
    CalendarTitle,
    CalendarTodayButton,
    CalendarNavigation,
  },
  props: {
    currentYear: {
      type: Number,
      default: 0,
    },
    currentMonth: {
      type: Number,
      default: 0,
    },
  },
  emits: {
    'init:date': null,
    prev: null,
    next: null,
  },
  setup(props, { emit }) {
    const handleDateInit = () => {
      emit('init:date');
    };
    const handlePrev = () => {
      emit('prev');
    };
    const handleNext = () => {
      emit('next');
    };

    return {
      handleDateInit,
      handlePrev,
      handleNext,
    };
  },
}
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
