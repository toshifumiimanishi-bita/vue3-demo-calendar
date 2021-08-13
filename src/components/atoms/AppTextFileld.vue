<template>
  <input
    :class="$style.textfield"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: {
    'update:modelValue': (value) => true,
  }
}
</script>

<style lang="scss" module>
.textfield {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid var(--base-border-color);
  font-size: 15px;
  padding: 0.5em;
}
</style>
