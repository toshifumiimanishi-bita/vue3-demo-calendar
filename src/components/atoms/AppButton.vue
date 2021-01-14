<template>
  <button
    :class="$style.button"
    :style="styleObject"
    type="button"
  >{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
      required: true,
    },
    styleObject: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" module>
.button {
  background-color: #ccc;
  border-radius: var(--base-border-radius);
  color: #fff;
  font-size: 12px;
  line-height: 1;
  padding: 12px 8px;

  &[disabled] {
    opacity: 0.4;
  }
}
</style>
