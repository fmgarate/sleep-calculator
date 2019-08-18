<template>
  <div class="container mx-auto px-5 text-center">
    <logo />
    <sleep-calculator />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SleepCalculator from '~/components/SleepCalculator.vue'

export default {
  layout: 'bg-transparent',
  components: {
    Logo,
    SleepCalculator
  }
}
</script>
