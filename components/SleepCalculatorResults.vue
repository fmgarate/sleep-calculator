<template>
  <div class="calculator-results">
    <div class="py-2">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4" @click="reset">
        Calculate Again
      </button>
    </div>
    <go-to-bed-results :time="time" />
  </div>
</template>

<script>
import GoToBedResults from '~/components/SleepCalculatorGoToBedResults.vue'

export default {
  name: 'CalculatorResults',
  components: {
    GoToBedResults
  },
  props: {
    config: { type: Object, required: true }
  },
  computed: {
    time () {
      return this.$moment({
        hour: this.config.hh,
        minute: this.config.mm
      })
    }
  },
  methods: {
    reset () {
      this.$emit('reset')
    }
  }
}
</script>
