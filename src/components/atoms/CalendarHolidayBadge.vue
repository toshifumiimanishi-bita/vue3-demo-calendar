<template>
  <AppBadge :style-object="styleObject">{{ holiday }}</AppBadge>
</template>

<script setup>
import AppBadge from './AppBadge.vue';

const props = defineProps({
  holiday: {
    type: String,
    default: '',
    required: true,
  },
});
const styleObject = {
  backgroundColor: '#f9a802',
};
</script>