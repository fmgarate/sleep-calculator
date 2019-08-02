<template>
  <div class="calculator-results">
    <go-to-bed-results
      v-if="config.mode == 'go-to-bed'"
      v-bind:time="time" />
    <wake-up-results
      v-else
      v-bind:time="time" />
    <div class="info text-xs py-2">
      <p>If you wake up at one of these times, you'll rise in between 90-minute sleep cycles.
        A good night's sleep consists of 5-6 complete sleep cycles.</p>
    </div>
    <div class="py-2">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4" @click="reset">
        CALCULATE AGAIN
      </button>
    </div>
  </div>
</template>

<script>
import GoToBedResults from "~/components/SleepCalculatorGoToBedResults.vue"
import WakeUpResults from "~/components/SleepCalculatorWakeUpResults.vue"

export default {
  name: "CalculatorResults",
  components: {
    GoToBedResults,
    WakeUpResults
  },
  props: [
    "config"
  ],
  computed: {
    time: function() {
      if (this.config.mode == "go-to-bed") {
        return this.$moment({hour: this.config.hh, minute: this.config.mm})
      } else {
        return this.$moment()
      }
    }
  },
  methods: {
    reset: function() {
      this.$emit("reset")
    }
  }
}
</script>
