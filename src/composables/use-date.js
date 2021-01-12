import { ref } from 'vue';

export default function useDate() {
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;
  const currentYear = ref(thisYear);
  const currentMonth = ref(thisMonth);
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
    today,
    thisYear,
    thisMonth,
    currentYear,
    currentMonth,
    initYear,
    initMonth,
    initDate,
    incrementCurrentYear,
    decrementCurrentYear,
    incrementCurrentMonth,
    decrementCurrentMonth,
  };
}