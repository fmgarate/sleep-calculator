<template>
  <div class="calculator-setup">
    <div class="time-control-wrapper">
      <time-control
        :hh="time.hh"
        :mm="time.mm"
        :am="time.am"
        @set-time="setTime"
      />
    </div>
    <div class="actions">
      <button class="btn-finish" @click="finish()">
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
      time: {
        hh: 7,
        mm: 30,
        am: 'AM'
      }
    }
  },
  methods: {
    finish () {
      this.$emit('setup-completed', this.time)
    },
    setTime (value) {
      this.time = { ...this.time, ...value }
    }
  }
}
</script>

<style scoped>
  .calculator-setup {
    @apply mx-auto max-w-xs
  }
  .time-control-wrapper {
    @apply bg-white py-1 px-3 rounded
  }
  .time-control-wrapper,
  .actions {
    @apply my-4
  }
  .btn-finish {
    @apply bg-white rounded-full font-bold py-2 px-6;
    color: #2A8CF8
  }
</style>
