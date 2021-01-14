<template>
  <div :class="$style.calendarbody">
    <div :class="$style.calendarbody_cells">
      <CalendarCell
        :class="$style.calendarbody_cell"
        v-for="(calendarData, cellIndex) in currentCalendarData"
        :key="calendarData.id"
        :calendar-data="calendarData"
      >
        <a href="">
          <CalendarDayOfTheWeek
            v-if="cellIndex < 7"
            :day-of-the-week-index="calendarData.dayOfTheWeekIndex"
          />
          <CalendarDay
            :day="calendarData.day"
            :is-today="calendarData.isToday"
          />
          <CalendarHolidayBadge
            v-if="calendarData.holiday"
            :holiday="calendarData.holiday"
          />
        </a>
      </CalendarCell>
    </div>
  </div>
</template>

<script>
import CalendarDay from '../atoms/CalendarDay.vue';
import CalendarDayOfTheWeek from '../atoms/CalendarDayOfTheWeek.vue';
import CalendarHolidayBadge from '../atoms/CalendarHolidayBadge.vue';
import CalendarTaskBadge from '../atoms/CalendarTaskBadge.vue';
import CalendarCell from '../molecules/CalendarCell.vue';

export default {
  components: {
    CalendarDay,
    CalendarDayOfTheWeek,
    CalendarHolidayBadge,
    CalendarTaskBadge,
    CalendarCell,
  },
  props: {
    currentCalendarData: {
      type: Array,
      default: () => [],
    },
  }
}
</script>

<style lang="scss" module>
.calendarbody {
  height: 100%;
}

.calendarbody_cells {
  display: grid;
  grid-template-columns: repeat(7, percentage(1 / 7));
  grid-template-rows: repeat(6, percentage(1 / 6));
  height: 100%;
}

.calendarbody_cell {
  border-bottom: 1px solid var(--base-border-color);
  border-left: 1px solid var(--base-border-color);

  > a {
    display: block;
    height: 100%;
  }
}
</style>