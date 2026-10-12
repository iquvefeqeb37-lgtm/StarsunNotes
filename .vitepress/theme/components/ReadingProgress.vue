<script setup lang="ts">
import { onBeforeUnmount, onMounted, nextTick, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const progress = ref(0)

function updateProgress() {
  if (typeof window === 'undefined') return
  const doc = document.documentElement
  const distance = Math.max(0, doc.scrollHeight - window.innerHeight)
  progress.value = distance ? Math.min(100, (window.scrollY / distance) * 100) : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress)
  updateProgress()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})

watch(() => route.path, () => nextTick(updateProgress))
</script>

<template>
  <div
    class="sn-reading-progress"
    aria-hidden="true"
    :style="{ transform: `scaleX(${progress / 100})` }"
  />
</template>
