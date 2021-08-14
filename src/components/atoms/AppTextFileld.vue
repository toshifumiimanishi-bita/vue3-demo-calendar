<template>
  <input
    :class="$style.textfield"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});
const emit = defineEmits({
  'update:modelValue': (value) => true,
});
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
