<template>
  <Calendar :holidays="holidays" />
</template>

<script>
import { defineComponent } from 'vue';
import fetchHolidays from '../../utils/fetchHolidays';
import Calendar from './Calendar.vue';

export default defineComponent ({
  components: {
    Calendar,
  },
  async setup() {
    const holidays = await fetchHolidays();
    return {
      holidays,
    };
  }
});
</script>