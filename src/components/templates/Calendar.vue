<template>
  <div :class="$style.calendar">
    <CalendarHeader
      :current-year="currentYear"
      :current-month="currentMonth"
      @init:date="initDate"
      @prev="handlePrev"
      @next="handleNext"
    />
    <CalendarBody
      :current-calendar-data="currentCalendarData"
    />
  </div>
</template>

<script setup>
import useDate from '../../composables/useDate';
import useCalendar from '../../composables/useCalendar';
import CalendarBody from '../organisms/CalendarBody.vue';
import CalendarHeader from '../organisms/CalendarHeader.vue';

const props = defineProps({
  holidays: {
    type: Object,
    default: () => ({}),
  },
});
const { holidays } = props;
const {
  currentYear,
  currentMonth,
  currentFirstDayOfTheMonthIndex,
  currentEndOfMonth,
  currentLateLastMonth,
  initDate,
  incrementCurrentYear,
  decrementCurrentYear,
  incrementCurrentMonth,
  decrementCurrentMonth,
} = useDate();
const { currentCalendarData } = useCalendar({
  holidays,
  currentYear,
  currentMonth,
  currentFirstDayOfTheMonthIndex,
  currentEndOfMonth,
  currentLateLastMonth,
});
const goToPrevMonth = () => {
  if (currentMonth.value <= 1) {
    decrementCurrentYear();
    currentMonth.value = 12;
  } else {
    decrementCurrentMonth();
  }
};
const goToNextMonth = () => {
  if (currentMonth.value >= 12) {
    incrementCurrentYear();
    currentMonth.value = 1;
  } else {
    incrementCurrentMonth();
  }
};
const handlePrev = () => {
  goToPrevMonth();
};
const handleNext = () => {
  goToNextMonth();
};
</script>

<style lang="scss" module>
.calendar {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
}
</style>
