<template>
  <AppBadge :badge-label="holiday" :style-object="styleObject" />
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
  setup(props) {
    const styleObject = {
      backgroundColor: '#f9a802',
    };
    return {
      styleObject,
    };
  },
};
</script>