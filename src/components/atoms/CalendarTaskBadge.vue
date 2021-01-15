<template>
  <AppBadge :class="$style.badge" :style-object="styleObject">
    {{ taskName }}
    <button
      :class="$style.badge_closebutton"
      @click.stop.prevent="$emit('remove', taskId)"
      type="button"
    >×</button>
  </AppBadge>
</template>

<script>
import AppBadge from './AppBadge.vue';

export default {
  components: {
    AppBadge,
  },
  props: {
    taskId: {
      type: String,
      default: '',
      required: true,
    },
    taskName: {
      type: String,
      default: '',
      required: true,
    },
  },
  emits: {
    remove: (taskId) => typeof taskId === 'string',
  },
  setup() {
    const styleObject = {
      backgroundColor: '#2ac8e2',
    };
    return {
      styleObject,
    };
  },
}
</script>

<style lang="scss" module>
.badge {
  position: relative;
}

.badge_closebutton {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
