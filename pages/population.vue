<template>
  <div class="flex">
    <Sidebar />
    <div class="m-10 w-9/12">
      <h1 class="m-auto text-center">
        ここは人口推移をグラフで確認することができるよ
      </h1>
      <main>
        <div class="mt-10">
          <a href="/" class="text-green-500">home</a> > 人口推移
        </div>
        <ChartGraf />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import ChartGraf from '~/components/ChartGraf.vue'

export default Vue.extend({
  name: 'populationPage',
  components: { Sidebar, ChartGraf },
})
</script>
