<template>
  <Suspense>
    <template #default>
      <AsyncCalendar />
    </template>
    <template #fallback> ... </template>
  </Suspense>
</template>

<script>
import AsyncCalendar from '../templates/AsyncCalendar.vue'

export default {
  name: 'App',
  components: {
    AsyncCalendar
  }
}
</script>