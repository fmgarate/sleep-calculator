<template>
  <div class="go-to-bed-results">
    <h2 class="font-bold py-2">
      GO TO BED TIMES
    </h2>
    <div class="info">
      <p>It takes the average human about 15 minutes to fall asleep. <br>
        To wake up refreshed at {{ time | moment("HH:mm") }}, you should go to bed at one of the following times:</p>
    </div>
    <div class="flex flex-wrap justify-center py-5">
      <div v-for="time in results" class="border border-solid border-blue-500 rounded mx-1 my-2 px-1">
        {{ time | moment("HH:mm") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoToBedResults",
  props: [
    "time"
  ],
  computed: {
    results: function() {
      let time = this.$moment(this.time).subtract({minute: 15})
      let times = []

      for (let i = 0; i < 6; i++) {
        time = this.$moment(time).subtract({minute: 90})
        times.push(time)
      }

      return times.reverse()
    }
  }
}
</script>
