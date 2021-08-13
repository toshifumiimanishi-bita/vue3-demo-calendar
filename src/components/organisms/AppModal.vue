<template>
  <div :class="$style.modal" role="dialog" tabindex="-1" :aria-hidden="!isVisible">
    <div :class="$style.modal_container" @click.self="$emit('hide')">
      <div :class="$style.modal_contents" role="document" :style="styleObject">
        <div :class="$style.modal_content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  styleObject: {
    type: Object,
    default: () => ({
      width: '400px',
      height: '320px',
      top: 'calc(50% - 160px)',
      left: 'calc(50% - 200px)',
    }),
  },
});
const emit = defineEmits({
  hide: null,
});
</script>

<style lang="scss" module>
.modal {
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: var(--zindex-modal);

  &[aria-hidden='true'] {
    opacity: 0;
    visibility: hidden;
  }
}

.modal_container {
  align-items: center;
  display: flex;
  min-height: 100%;
  padding: 0 20px;

  &::after {
    content: '';
    font-size: 0;
    min-height: inherit;
  }
}

.modal_contents {
  position: absolute;
}

.modal_content {
  background-color: var(--modal-background-color);
  border-radius: var(--base-border-radius);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  display: none;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1.6rem;

  [aria-hidden='false'] & {
    display: flex;
  }
}
</style>
