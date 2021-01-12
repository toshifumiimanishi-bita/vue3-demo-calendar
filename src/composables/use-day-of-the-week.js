import { ref, computed } from 'vue';

export default function useDayOfTheWeek(dayOfTheWeekIndex) {
  const dayOfTheWeeks = ref(['日', '月', '火', '水', '木', '金', '土']);
  const dayOfTheWeek = computed(() => {
    return dayOfTheWeeks.value[dayOfTheWeekIndex];
  });

  return dayOfTheWeek;
}