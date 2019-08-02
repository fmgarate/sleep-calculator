<template>
  <div class="sleep-calculator mx-auto max-w-xs">
    <calculator-setup
      v-if="config.setup"
      v-on:setup-completed="calculate" />
    <calculator-results
      v-else
      v-on:reset="reset"
      v-bind:config="config" />
  </div>
</template>

<script>
import CalculatorSetup from "~/components/SleepCalculatorSetup.vue"
import CalculatorResults from "~/components/SleepCalculatorResults.vue"

export default {
  name: "SleepCalculator",
  components: {
    CalculatorSetup,
    CalculatorResults
  },
  data: function() {
    return {
      // setupMode: true,
      config: {setup: true}
    }
  },
  methods: {
    calculate: function(config) {
      // this.setupMode = false
      this.config = { ...config, setup: false }
    },
    reset: function() {
      // this.setupMode = true
      this.config = {setup: true}
    }
  }
}
</script>
