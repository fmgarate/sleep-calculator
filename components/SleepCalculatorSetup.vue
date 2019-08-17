<template>
  <div class="calculator-setup">
    <div class="setup-controls flex">
      <time-control
        class="w-1/2"
        :items="hours"
        :selected="hh"
        @set-value="setHour"
      />
      <time-control
        class="w-1/2"
        :items="minutes"
        :selected="mm"
        @set-value="setMinute"
      />
    </div>
    <div class="calc-actions py-2">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" @click="finish()">
        When should I goto Bed
      </button>
    </div>
  </div>
</template>

<script>
import TimeControl from '~/components/SleepCalculatorTimeControl.vue'

export default {
  name: 'CalculatorSetup',
  components: {
    TimeControl
  },
  data () {
    return {
      hours: this._.range(0, 24),
      minutes: this._.range(0, 60, 5),
      hh: 0,
      mm: 0
    }
  },
  methods: {
    finish () {
      this.$emit('setup-completed', {
        hh: this.hh,
        mm: this.mm
      })
    },
    setHour (value) {
      this.hh = value
    },
    setMinute (value) {
      this.mm = value
    }
  }
}
</script>

<style scoped>
  .calculator-setup,
  .calculator-setup .setup-controls {
    margin: 10px 0 15px;
  }
</style>
