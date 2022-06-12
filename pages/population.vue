<template>
  <div class="m-10">
    <h1 class="m-auto text-center">
      ここは人口推移をグラフで確認することができるよ
    </h1>
    <div class="mt-10">
      <a href="/" class="text-green-500">home</a> > 人口推移
    </div>
    <div class="mt-10">
      <Sidebar />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from '~/components/Sidebar.vue'

export default Vue.extend({
  name: 'populationPage',
  components: { Sidebar },
})
</script>
