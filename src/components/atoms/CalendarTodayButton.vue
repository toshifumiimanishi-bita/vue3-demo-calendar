<template>
  <button :class="$style.todaybutton" type="button" @click="handleClick">今日</button>
</template>

<script>
export default {
  emits: {
    'init:date': null,
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit('init:date');
    };

    return {
      handleClick,
    };
  },
}
</script>

<style lang="scss" module>
.todaybutton {
  background-color: transparent;
  border: 1px solid #dadce0;
  border-radius: var(--base-border-radius);
  cursor: pointer;
  font-size: 12px;
  height: 100%;
  line-height: 1;
  padding: 8px;
}
</style>