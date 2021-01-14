import { computed } from 'vue';
import generateUuid from '../utils/generateUuid';
import toZeroPadding from '../utils/toZeroPadding';

export default function useCalendar({
  holidays,
  currentYear,
  currentMonth,
  currentFirstDayOfTheMonthIndex,
  currentEndOfMonth,
  currentLateLastMonth,
}) {
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;
  const dateToday = `${thisYear}-${toZeroPadding(thisMonth)}-${toZeroPadding(today.getDate())}`;
  const getHoliday = (date) => {
    const holiday = Object.prototype.hasOwnProperty.call(holidays, date)
      ? holidays[date]
      : null;
    return holiday;
  }
  const initLastMonthCalendarData = () => {
    const currentLateLastMonthDate = currentLateLastMonth.value.getDate();
    const currentLastMonth = currentMonth.value - 1;
    const days = currentFirstDayOfTheMonthIndex.value;
    const lastMonthCalendarData = [...Array(days).keys()].map((i) => {
      const id = generateUuid();
      const day = currentLateLastMonthDate - currentFirstDayOfTheMonthIndex.value + i + 1;
      const date =
        currentLastMonth < 1
          ? `${currentYear.value - 1}-12-${toZeroPadding(day)}`
          : `${currentYear.value}-${toZeroPadding(currentLastMonth)}-${toZeroPadding(day)}`;
      const dayOfTheWeekIndex = new Date(date).getDay();
      const holiday = getHoliday(date);
      const isThisMonth = false;
      const isToday = date === dateToday;

      return { id, date, day, dayOfTheWeekIndex, holiday, isThisMonth, isToday };
    });

    return lastMonthCalendarData;
  };
  const initThisMonthCalendarData = () => {
    const days = currentEndOfMonth.value.getDate();
    const thisMonthCalendarData = [...Array(days).keys()].map((i) => {
      const id = generateUuid();
      const day = i + 1;
      const date = `${currentYear.value}-${toZeroPadding(currentMonth.value)}-${toZeroPadding(day)}`;
      const dayOfTheWeekIndex = new Date(date).getDay();
      const holiday = getHoliday(date);
      const isThisMonth = true;
      const isToday = date === dateToday;

      return { id, date, day, dayOfTheWeekIndex, holiday, isThisMonth, isToday };
    });

    return thisMonthCalendarData;
  };
  const initNextMonthCalendarData = () => {
    const MAX_CALENDAR_DATA_LENGTH = 42;
    const currentNextMonth = currentMonth.value + 1;
    const days = MAX_CALENDAR_DATA_LENGTH - currentEndOfMonth.value.getDate() - currentFirstDayOfTheMonthIndex.value;
    const dateData = [...Array(days).keys()].map((i) => {
      const id = generateUuid();
      const day = i + 1;
      const date =
        currentNextMonth > 12
          ? `${currentYear.value + 1}-01-${toZeroPadding(day)}`
          : `${currentYear.value}-${toZeroPadding(currentNextMonth)}-${toZeroPadding(day)}`;
      const dayOfTheWeekIndex = new Date(date).getDay();
      const holiday = getHoliday(date);
      const isThisMonth = false;
      const isToday = date === dateToday;

      return { id, date, day, dayOfTheWeekIndex, holiday, isThisMonth, isToday };
    });

    return dateData;
  };
  const initCurrentCalendarData = () => {
    const lastMonthCalendarData = computed(initLastMonthCalendarData);
    const thisMonthCalendarData = computed(initThisMonthCalendarData);
    const nextMonthCalendarData = computed(initNextMonthCalendarData);
    const currentCalendarData = computed(() => [...lastMonthCalendarData.value, ...thisMonthCalendarData.value, ...nextMonthCalendarData.value]);
    return currentCalendarData;
  };
  const currentCalendarData = initCurrentCalendarData();
  
  return currentCalendarData;
}
