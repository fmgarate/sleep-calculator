<template>
  <div class="container mx-auto px-5 text-center">
    <sleep-calculator />
  </div>
</template>

<script>
import SleepCalculator from '~/components/SleepCalculator.vue'

export default {
  layout: 'bg-transparent',
  components: {
    SleepCalculator
  }
}
</script>
