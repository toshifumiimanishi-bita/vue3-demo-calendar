<template>
  <Calendar :holidays="holidays" />
</template>

<script setup>
import { defineComponent } from 'vue';
import fetchHolidays from '../../utils/fetchHolidays';
import Calendar from './Calendar.vue';

const holidays = await fetchHolidays();
</script>