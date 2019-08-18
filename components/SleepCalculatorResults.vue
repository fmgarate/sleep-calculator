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
        <strong>{{ item.format("h:mm") }}</strong>
        <span>{{ item.format("A") }}</span>
      </div>
    </div>
    <div class="info">
      It takes the average human about 15 minutes to fall asleep. <br>
      To wake up refreshed at {{ time.format("h:mm A") }}, you should go to bed at one of the above times
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'CalculatorResults',
  props: {
    config: { type: Object, required: true }
  },
  computed: {
    time () {
      const { hh, mm, am } = this.config.time
      let time = dayjs()
        .hour(hh)
        .minute(mm)

      if (hh === 12) {
        time = time.hour(0)
      }

      if (am !== 'AM') {
        time = time.add(12, 'hour')
      }

      return time
    },
    results () {
      let time = dayjs(this.time).subtract(15, 'minute')
      const times = []

      for (let i = 0; i < 6; i++) {
        time = time.subtract(90, 'minute')
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
    @apply bg-white rounded-full font-bold py-2 px-6;
    color: #2A8CF8
  }
  .title {
    @apply text-white font-bold
  }
  .actions,
  .title,
  .info {
    @apply py-3
  }
  .time-list {
    @apply flex flex-wrap justify-center py-5
  }
  .time-item {
    @apply w-1/4 bg-white px-3 py-1 my-1 mx-1
  }
</style>
