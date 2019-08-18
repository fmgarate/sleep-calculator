<template>
  <div class="time-control">
    <div class="time-highlight" />
    <div class="time-row">
      <div ref="hh" class="time-col">
        <div
          v-for="item in items.hh"
          :key="item"
          class="time-item"
          :class="{'active': item === time.hh}"
        >
          <button class="time-btn" @click="setTime('hh', item)">
            {{ item }}
          </button>
        </div>
      </div>
      <div ref="mm" class="time-col">
        <div
          v-for="item in items.mm"
          :key="item"
          class="time-item"
          :class="{'active': item === time.mm}"
        >
          <button class="time-btn" @click="setTime('mm', item)">
            {{ item }}
          </button>
        </div>
      </div>
      <div ref="am" class="time-col">
        <div
          v-for="item in items.am"
          :key="item"
          class="time-item"
          :class="{'active': item === time.am}"
        >
          <button class="time-btn" @click="setTime('am', item)">
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeControl',
  props: {
    hh: { type: Number, default: 7 },
    mm: { type: Number, default: 30 },
    am: { type: String, default: 'AM' }
  },
  data () {
    return {
      items: {
        hh: [...Array(12).keys()].map(k => k + 1),
        mm: [...Array(12).keys()].map(k => k * 5),
        am: ['AM', 'PM']
      },
      time: {
        hh: this.hh,
        mm: this.mm,
        am: this.am
      }
    }
  },
  mounted () {
    this.setRefScrollPosition('hh', this.hh)
    this.setRefScrollPosition('mm', this.mm)
    this.setRefScrollPosition('am', this.am)
  },
  methods: {
    setRefScrollPosition (ref, value) {
      this.$refs[ref].scrollTo(0, this.items[ref].indexOf(value) * 32)
    },
    setTime (ref, value) {
      this.setRefScrollPosition(ref, value)
      this.time = {
        ...this.time,
        ...{ [ref]: value }
      }
      this.$emit('set-time', this.time)
    }
  }
}
</script>

<style scoped>
  .time-control {
    position: relative;
  }
  .time-highlight {
    @apply z-0;
    position: absolute;
    border: 2px solid #563FB8;
    width: 100%;
    height: 32px;
    top: 32px;
    border-radius: 15px;
  }
  .time-row {
    @apply flex;
  }
  .time-col {
    @apply w-1/3 z-10;
    height: 96px;
    overflow-y: scroll;
  }
  .time-col::-webkit-scrollbar {
    width: 0 !important
  }
  .time-item {
    height: 32px;
    line-height: 32px;
    text-align: center;
  }
  .time-btn {
    @apply w-full
  }
  .time-item.active .time-btn {
    @apply font-bold;
    outline: none;
    color: #563FB8;
  }
  .time-item:first-child {
    margin-top: 32px;
  }
  .time-item:last-child {
    margin-bottom: 32px;
  }
</style>
