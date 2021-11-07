import { ref, onMounted, onUnmounted } from 'vue'
function useMouseTracker() {

  const x = ref(0)
  const y = ref(0)
  const updatePosition = (event: MouseEvent) => {
    x.value = event.clientX
    y.value = event.clientY
  }
  onMounted(() => {
    document.addEventListener('click', updatePosition)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updatePosition)
  })
  return { x, y }
}

export default useMouseTracker;
