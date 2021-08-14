<template>
  <div :class="$style.badge" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  styleObject: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" module>
.badge {
  background-color: #ccc;
  border-radius: var(--base-border-radius);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.4;
  overflow: hidden;
  padding: 3px 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
