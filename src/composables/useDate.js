import { ref, computed } from 'vue';

export default function useDate() {
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;
  const currentYear = ref(thisYear);
  const currentMonth = ref(thisMonth);
  const currentFirstDay = computed(() => {
    return new Date(currentYear.value, currentMonth.value - 1, 1);
  });
  const currentFirstDayOfTheMonthIndex = computed(() => {
    return currentFirstDay.value.getDay();
  });
  const currentEndOfMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value, 0);
  });
  const currentLateLastMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value - 1, 0);
  });
  const initYear = () => {
    currentYear.value = thisYear;
  };
  const initMonth = () => {
    currentMonth.value = thisMonth;
  };
  const initDate = () => {
    initYear();
    initMonth();
  };
  const incrementCurrentYear = () => {
    currentYear.value++;
  };
  const decrementCurrentYear = () => {
    currentYear.value--;
  };
  const incrementCurrentMonth = () => {
    currentMonth.value++;
  };
  const decrementCurrentMonth = () => {
    currentMonth.value--;
  };

  return {
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
  };
}