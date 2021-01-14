import { ref, readonly } from 'vue';

export default function useModal() {
  const isVisible = ref(false);
  const show = () => {
    isVisible.value = true;
  }
  const hide = () => {
    isVisible.value = false;
  };

  return {
    isVisible: readonly(isVisible),
    show,
    hide,
  };
}