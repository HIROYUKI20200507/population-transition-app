<template>
  <div class="m-10">
    <h1 class="m-auto text-center">
      ここは人口推移をグラフで確認することができるよ
    </h1>
    <div class="mt-10">
      <a href="/" class="text-green-500">home</a> > 人口推移
    </div>
    <Sidebar />
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import Sidebar from '~/components/Sidebar.vue'

// API TODO:Vuexで管理予定
import RESAS_CODE from '~/plugins/resas.js'

export default Vue.extend({
  name: 'populationPage',
  components: { Sidebar },
  mounted() {
    axios
      .get(`${RESAS_CODE.END_POINT}${RESAS_CODE.PREFECTURES_PATH}`, {
        headers: { 'X-API-KEY': `${RESAS_CODE.API_KEY}` },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  },
})
</script>
