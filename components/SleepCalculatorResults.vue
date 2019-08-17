<template>
  <div class="calculator-results">
    <div class="actions">
      <button class="btn-reset" @click="reset">
        Calculate Again
      </button>
    </div>
    <h2 class="title">
      GO TO BED TIMES
    </h2>
    <div class="time-list">
      <div v-for="(item, index) in results" :key="index" class="time-item">
        <strong>{{ item | moment("h:mm") }}</strong>
        <span>{{ item | moment("A") }}</span>
      </div>
    </div>
    <div class="info">
      It takes the average human about 15 minutes to fall asleep. <br>
      To wake up refreshed at {{ time | moment("h:mm A") }}, you should go to bed at one of the above times
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorResults',
  props: {
    config: { type: Object, required: true }
  },
  computed: {
    time () {
      return this.$moment({
        hour: this.config.hh,
        minute: this.config.mm
      })
    },
    results () {
      let time = this.$moment(this.time).subtract({ minute: 15 })
      const times = []

      for (let i = 0; i < 6; i++) {
        time = this.$moment(time).subtract({ minute: 90 })
        times.push(time)
      }

      return times.reverse()
    }
  },
  methods: {
    reset () {
      this.$emit('reset')
    }
  }
}
</script>

<style scoped>
  .calculator-results {
    @apply mx-auto max-w-md
  }
  .btn-reset {
    @apply bg-red-500 text-white font-bold py-2 px-4 rounded-full
  }
  .btn-reset:hover {
    @apply bg-red-700
  }
  .title {
    @apply font-bold py-3
  }
  .info {
    @apply py-2
  }
  .time-list {
    @apply flex flex-wrap justify-center py-5
  }
  .time-item {
    @apply border border-solid border-blue-500 rounded px-3 py-1 my-2 mx-1
  }
</style>
