<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const route = useRoute()
const { page } = useData()

const branch = computed(() => {
  if (route.path.startsWith(withBase('/cpp/'))) return { text: 'C++ 学习', link: withBase('/cpp/') }
  if (route.path.startsWith(withBase('/guide/'))) return { text: '学习指南', link: withBase('/guide/') }
  if (route.path.startsWith(withBase('/journal/'))) return { text: '学习日志', link: withBase('/journal/') }
  return null
})
const isBranchIndex = computed(() =>
  !!branch.value && (
    route.path === branch.value.link ||
    route.path === `${branch.value.link}index` ||
    route.path === `${branch.value.link}index.html`
  )
)
</script>

<template>
  <nav class="sn-breadcrumbs" aria-label="当前位置">
    <a :href="withBase('/')">首页</a>
    <template v-if="branch">
      <span class="sn-breadcrumb-separator" aria-hidden="true">/</span>
      <a v-if="!isBranchIndex" :href="branch.link">{{ branch.text }}</a>
      <span v-else aria-current="page">{{ branch.text }}</span>
    </template>
    <template v-if="!isBranchIndex">
      <span class="sn-breadcrumb-separator" aria-hidden="true">/</span>
      <span class="sn-breadcrumb-current" aria-current="page">{{ page.title }}</span>
    </template>
  </nav>
</template>
