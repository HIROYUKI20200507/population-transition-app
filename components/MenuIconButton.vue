<template>
  <button class="relative h-5 w-6">
    <span
      :class="
        isActive
          ? 'transform rotate-45 top-2 w-7 transition duration-300'
          : 'top-0 w-6'
      "
      class="h-1 inline-block transition-all absolute right-0 bg-black"
    ></span>
    <span
      :class="isActive ? 'hidden' : 'top-2 w-6'"
      class="h-1 inline-block transition-all absolute right-0 bg-black"
    ></span>
    <span
      :class="
        isActive
          ? 'transform -rotate-45 top-2 w-7 transition duration-300'
          : 'top-4 w-6'
      "
      class="h-1 inline-block transition-all absolute right-0 bg-black"
    ></span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuIconButton',
  props: {
    isActiveMenu: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.isActiveMenu
    },
  },
})
</script>
