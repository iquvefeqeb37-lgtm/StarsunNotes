<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ReadingProgress from './components/ReadingProgress.vue'
import DocBreadcrumbs from './components/DocBreadcrumbs.vue'
import DocActions from './components/DocActions.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <ReadingProgress />
    </template>
    <template #doc-before>
      <DocBreadcrumbs />
    </template>
    <template #doc-after>
      <DocActions />
    </template>
  </Layout>
</template>
