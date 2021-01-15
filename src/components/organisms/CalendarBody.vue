<template>
  <div :class="$style.calendarbody">
    <div :class="$style.calendarbody_cells">
      <CalendarCell
        :class="$style.calendarbody_cell"
        v-for="(calendarData, cellIndex) in currentCalendarData"
        :key="calendarData.id"
        :calendar-data="calendarData"
      >
        <a href=""
          :data-date="calendarData.date"
          @click.prevent="handleCalendarCellClick"
        >
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
            :class="$style.calendarbody_badge"
            :holiday="calendarData.holiday"
          />
          <template v-for="(task, taskIndex) in tasks[calendarData.date]" :key="task.id">
            <CalendarTaskBadge
              v-if="isVisibleTaskBadge(taskIndex)"
              :class="$style.calendarbody_badge"
              :task-id="task.id"
              :task-name="task.name"
              @remove="handleRemove"
            />
          </template>
          <p
            v-if="isVisibleRemainingTasks(tasks[calendarData.date])"
            :class="$style.calendarbody_reaming"
          >他{{ countOfRemainingTasks(tasks[calendarData.date]) }}件</p>
        </a>
      </CalendarCell>
    </div>
  </div>
  <CalendarTaskFormModal
    :modal-title="currentDate"
    :is-visible="isVisibleCalendarTaskFormModal"
    @hide="hideCalendarTaskListModal"
    @save="handleSave"
  />
</template>

<script>
import { computed, ref } from 'vue';
import CalendarDay from '../atoms/CalendarDay.vue';
import CalendarDayOfTheWeek from '../atoms/CalendarDayOfTheWeek.vue';
import CalendarHolidayBadge from '../atoms/CalendarHolidayBadge.vue';
import CalendarTaskBadge from '../atoms/CalendarTaskBadge.vue';
import CalendarCell from '../molecules/CalendarCell.vue';
import CalendarTaskFormModal from '../organisms/CalendarTaskFormModal.vue';
import useTask from '../../composables/useTask';
import useModal from '../../composables/useModal';
import generateUuid from '../../utils/generateUuid';

export default {
  components: {
    CalendarDay,
    CalendarDayOfTheWeek,
    CalendarHolidayBadge,
    CalendarTaskBadge,
    CalendarCell,
    CalendarTaskFormModal,
  },
  props: {
    currentCalendarData: {
      type: Array,
      default: () => [],
    },
  },
  setup({ currentCalendarData }) {
    const currentDate = ref('');
    const {
      tasks,
      addTask,
      removeTask,
      saveTasks,
    } = useTask();
    const {
      isVisible: isVisibleCalendarTaskFormModal,
      show: showCalendarTaskFormModal,
      hide: hideCalendarTaskListModal,
    } = useModal();
    const handleCalendarCellClick = (event) => {
      currentDate.value = event.currentTarget.getAttribute('data-date');
      showCalendarTaskFormModal();
    };
    const handleSave = (newTaskName) => {
      addTask(newTaskName, currentDate.value)
      saveTasks();
    };
    const handleRemove = (taskId) => {
      removeTask(taskId);
    };
    const maxTaskBadgeDisplayed = 2;
    const isVisibleTaskBadge = computed(() => {
      return (taskIndex) =>  maxTaskBadgeDisplayed > taskIndex;
    });
    const isVisibleRemainingTasks = computed(() => {
      return (tasks) => tasks?.length > maxTaskBadgeDisplayed;
    });
    const countOfRemainingTasks = computed(() => {
      return (tasks) => tasks?.length - maxTaskBadgeDisplayed;
    });

    return {
      currentDate,
      isVisibleCalendarTaskFormModal,
      showCalendarTaskFormModal,
      hideCalendarTaskListModal,
      handleCalendarCellClick,
      handleSave,
      handleRemove,
      tasks,
      isVisibleTaskBadge,
      isVisibleRemainingTasks,
      countOfRemainingTasks,
    };
  },
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

.calendarbody_badge {
  + .calendarbody_badge {
    margin-top: 4px;
  }
}

.calendarbody_reaming {
  font-size: 10px;
  font-weight: bold;
  line-height: 1.4;
  letter-spacing: 0.1em;
  margin-top: 8px;
}
</style>