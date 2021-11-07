import { ref } from 'vue'
import axios from 'axios'

function useURLLoader<T>(url: string) {
  //設置初始
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)
  //發送異步請求
  axios.get(url).then((rawData) => {
    loading.value = false
    loaded.value = true
    result.value = rawData.data
    console.log(rawData.data)
  }).catch(e => {
    error.value = e
    loading.value = false
  })
  return {
    result,
    loading,
    error,
    loaded
  }


}

export default useURLLoader
