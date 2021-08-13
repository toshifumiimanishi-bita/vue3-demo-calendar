<template>
  <form class="form" @submit.prevent="saveTask">
    <div :class="$style.form_textfield">
      <AppTextFileld
        v-model="newTaskName"
        placeholder="タスクを入力"
      />
    </div>
    <AppButton
      :class="$style.form_savebutton"
      :style-object="styleObject"
      :disabled="isSaveButtonDisabled"
      type="submit"
      label="保存"
    />
  </form>
</template>

<script setup>
import { computed, ref } from 'vue';
import AppButton from '../atoms/AppButton.vue';
import AppTextFileld from '../atoms/AppTextFileld.vue';

const emit = defineEmits({
  save: (value) => true,
});
const newTaskName = ref('');
const isSaveButtonDisabled = computed(() => {
  return newTaskName.value === '';
});
const styleObject = {
  backgroundColor: '#1a73e8',
};
const saveTask = () => {
  emit('save', newTaskName.value);
  newTaskName.value = '';
};
</script>

<style lang="scss" module>
.form_textfield {
  text-align: center;
}

.form_savebutton {
  bottom: 8px;
  position: absolute;
  right: 8px;
  width: 100px;
}
</style>
