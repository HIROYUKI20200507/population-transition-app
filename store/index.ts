import axios from 'axios'
import RESAS_CODE from '~/plugins/resas.js'

interface Data {
  pref: pref | unknown
}

interface pref {
  prefCode: number
  prefName: string
}

export const state = (): Data => ({
  pref: '',
})

export const mutations = {
  getPref(state: any, payload: unknown): void {
    state.pref = payload
  },
}

export const actions = {
  fetchPref({ commit }: any) {
    axios
      .get(`${RESAS_CODE.END_POINT}${RESAS_CODE.PREFECTURES_PATH}`, {
        headers: { 'X-API-KEY': `${RESAS_CODE.API_KEY}` },
      })
      .then((response) => {
        const fetchPerData = response.data.result
        commit('getPref', fetchPerData)
      })
      .catch((error) => {
        console.error(error)
      })
  },
}

export const getters = {}
