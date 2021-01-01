<template>
  <nav>
    <button :class="$style.prevbutton" @click="handlePrevButtonClick">＜</button>
    <button :class="$style.nextbutton" @click="handleNextButtonClick">＞</button>
  </nav>
</template>

<script>
export default {
  emits: {
    prev: null,
    next: null,
  },
  setup(props, { emit }) {
    const handlePrevButtonClick = () => {
      emit('prev');
    };
    const handleNextButtonClick = () => {
      emit('next');
    };

    return {
      handlePrevButtonClick,
      handleNextButtonClick,
    };
  },
}
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