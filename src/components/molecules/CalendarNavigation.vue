<template>
  <nav>
    <button :class="$style.prevbutton" @click="handlePrevButtonClick">＜</button>
    <button :class="$style.nextbutton" @click="handleNextButtonClick">＞</button>
  </nav>
</template>

<script setup>
const emit = defineEmits({
  prev: null,
  next: null,
});
const handlePrevButtonClick = () => {
  emit('prev');
};
const handleNextButtonClick = () => {
  emit('next');
};
</script>

<style lang="scss" module>
.prevbutton,
.nextbutton {
  background: none;
  border: 0;
  font-size: 16px;
  font-weight: bold;
}
</style>