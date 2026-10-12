<script setup lang="ts">
import { ref } from 'vue'

const feedback = ref('复制本页链接')

async function copyLink() {
  if (typeof window === 'undefined') return
  const address = window.location.href

  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
    await navigator.clipboard.writeText(address)
    feedback.value = '链接已复制 ✓'
    window.setTimeout(() => { feedback.value = '复制本页链接' }, 2200)
  } catch {
    window.prompt('请手动复制本页链接：', address)
  }
}
</script>

<template>
  <div class="sn-doc-actions">
    <span>记录问题，也记录理解发生的过程。</span>
    <button type="button" @click="copyLink">{{ feedback }}</button>
  </div>
</template>
