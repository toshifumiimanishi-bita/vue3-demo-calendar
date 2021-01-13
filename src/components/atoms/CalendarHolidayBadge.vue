<template>
  <AppBadge :style-object="styleObject">{{ holiday }}</AppBadge>
</template>

<script>
import AppBadge from './AppBadge.vue';

export default {
  components: {
    AppBadge,
  },
  props: {
    holiday: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup() {
    const styleObject = {
      backgroundColor: '#f9a802',
    };
    return {
      styleObject,
    };
  },
};
</script>