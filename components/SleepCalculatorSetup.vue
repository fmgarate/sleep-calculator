<template>
  <div class="calculator-setup">
    <h2 class="calc-title py-2">
      IF I WANT TO WAKE UP AT...
    </h2>
    <div class="setup-controls flex">
      <time-control class="w-1/2"
        v-bind:items="hours"
        v-bind:selected="hh"
        v-on:set-value="setHour" />
      <time-control class="w-1/2"
        v-bind:items="minutes"
        v-bind:selected="mm"
        v-on:set-value="setMinute" />
    </div>
    <div class="calc-actions py-2">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" @click="finish('go-to-bed')">
        WHEN SHOULD I GO TO BED?
      </button>
    </div>
    <h2 class="calc-title py-2">
      IF I GO TO SLEEP NOW...
    </h2>
    <div class="calc-actions py-2">
      <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4" @click="finish('wake-up')">
        WHEN SHOULD I GET UP?
      </button>
    </div>
  </div>
</template>

<script>
import TimeControl from "~/components/SleepCalculatorTimeControl.vue"

export default {
  name: "CalculatorSetup",
  components: {
    TimeControl
  },
  data: function () {
    return {
      hours: this._.range(0, 24),
      minutes: this._.range(0, 60, 5),
      hh: 0,
      mm: 0
    }
  },
  methods: {
    finish: function(mode) {
      this.$emit("setup-completed", {
        mode,
        hh: this.hh,
        mm: this.mm
      })
    },
    setHour: function(value) {
      this.hh = value
    },
    setMinute: function(value) {
      this.mm = value
    },
  }
}
</script>

<style scoped>
  .calculator-setup,
  .calculator-setup .setup-controls {
    margin: 10px 0 15px;
  }
</style>