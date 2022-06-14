<template>
  <aside class="flex w-3/12">
    <ul class="grid grid-cols-2 gap-3 shadow-md p-10" v-if="isActive">
      <template v-for="item in prefData">
        <li :key="item.prefCode">
          <label>
            <input type="checkbox" name="activePref" :value="item" />
            {{ item.prefName }}
          </label>
        </li>
      </template>
    </ul>
    <div class="mt-10 ml-10" @click="isActiveMenuIcon">
      <MenuIconButton :isActiveMenu="isActive" />
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuIconButton from './MenuIconButton.vue'

export default Vue.extend({
  name: 'Sidebar',
  components: {
    MenuIconButton,
  },
  data() {
    return {
      isActive: true,
    }
  },
  computed: {
    prefData() {
      return this.$store.state.pref
    },
  },
  methods: {
    isActiveMenuIcon() {
      this.isActive ? (this.isActive = false) : (this.isActive = true)
    },
  },
  async mounted() {
    this.$store.dispatch('fetchPref')
  },
})
</script>
