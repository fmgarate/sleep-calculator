<template>
  <div class="time-control">
    <div
      v-for="item in items"
      :key="item"
      class="time-item"
      :class="{ 'bg-blue-500 text-white': (item == selected) }"
    >
      <button class="w-full" @click="setValue(item)">
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeControl',
  props: {
    items: { type: Array, required: true },
    selected: { type: Number, required: true }
  },
  methods: {
    setValue (value) {
      this.$emit('set-value', value)
    }
  }
}
</script>

<style scoped>
  .time-control {
    height: 81px;
    overflow-y: scroll;
  }
  .time-item {
    height: 27px;
    line-height: 27px;
    text-align: center;
  }
</style>
