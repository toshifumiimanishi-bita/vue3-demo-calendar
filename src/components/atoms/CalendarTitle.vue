<template>
  <div :class="$style.title">{{ currentYear }}年{{ currentMonth }}月</div>
</template>

<script setup>
const props = defineProps({
  currentYear: {
    type: Number,
    default: 0,
  },
  currentMonth: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" module>
.title {
  font-size: 20px;
}
</style>