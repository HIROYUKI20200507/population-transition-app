<template>
  <ul class="grid grid-cols-8 gap-1">
    <template v-for="item in prefData">
      <li :key="item.prefCode">
        <label>
          <input type="checkbox" name="activePref" :value="item" />
          {{ item.prefName }}
        </label>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sidebar',
  computed: {
    prefData() {
      return this.$store.state.pref
    },
  },
})
</script>
