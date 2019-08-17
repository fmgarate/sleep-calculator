<template>
  <div class="sleep-calculator">
    <calculator-setup
      v-if="config.setup"
      @setup-completed="calculate"
    />
    <calculator-results
      v-else
      :config="config"
      @reset="reset"
    />
  </div>
</template>

<script>
import CalculatorSetup from '~/components/SleepCalculatorSetup.vue'
import CalculatorResults from '~/components/SleepCalculatorResults.vue'

export default {
  name: 'SleepCalculator',
  components: {
    CalculatorSetup,
    CalculatorResults
  },
  data () {
    return {
      config: { setup: true }
    }
  },
  methods: {
    calculate (config) {
      this.config = { ...config, setup: false }
    },
    reset () {
      this.config = { setup: true }
    }
  }
}
</script>
