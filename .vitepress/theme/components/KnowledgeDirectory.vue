<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { areas, notebooks, notebooksFor } from '../data/catalog'

const selectedArea = ref('all')
const searchText = ref('')

const displayedGroups = computed(() => {
  const q = searchText.value.trim().toLocaleLowerCase()

  return areas
    .filter(area => selectedArea.value === 'all' || selectedArea.value === area.id)
    .map(area => {
      const areaMatches = [area.title, area.en, area.description]
        .some(text => text.toLocaleLowerCase().includes(q))

      const records = notebooksFor(area.id).filter(note => {
        if (!q || areaMatches) return true
        return [note.title, note.subtitle, note.description, note.state]
          .some(text => text.toLocaleLowerCase().includes(q))
      })

      return { ...area, entries: records, areaMatches }
    })
    .filter(group => !q || group.areaMatches || group.entries.length > 0)
})

const resultCount = computed(() => displayedGroups.value.reduce(
  (sum, group) => sum + group.entries.length, 0
))

function selectArea(id: string) {
  selectedArea.value = id
}
</script>

<template>
  <main class="sn-knowledge sn-library-page" id="main-content">
    <div class="sn-utility-strip">
      <span class="sn-utility-dot" aria-hidden="true"></span>
      <span>STARSUNNOTES / INDEX</span>
      <a :href="withBase('/')" class="sn-utility-right">返回首页 ↗</a>
    </div>

    <header class="sn-library-header">
      <div class="sn-eyebrow">LIBRARY / KNOWLEDGE INDEX</div>
      <h1>知识总览<span class="sn-title-dot">.</span></h1>
      <p>按照知识领域整理专题。这里是一份可不断生长的目录，而不是固定只有 C++ 的课程网站。</p>
      <div class="sn-library-counts">
        <span>{{ areas.length }} 个领域</span>
        <i aria-hidden="true"></i>
        <span>{{ notebooks.length }} 个已有专题</span>
        <i aria-hidden="true"></i>
        <span>持续增加中</span>
      </div>
    </header>

    <div class="sn-library-controls">
      <label class="sn-library-search">
        <span aria-hidden="true">⌕</span>
        <input
          v-model="searchText"
          type="search"
          placeholder="筛选知识领域或专题名称…"
          aria-label="筛选知识目录"
        />
      </label>
      <p>这里筛选的是目录标题和简介；搜索文章正文请使用网站顶部的搜索。</p>
    </div>

    <nav class="sn-filter-nav" aria-label="按知识领域筛选">
      <button
        type="button"
        :class="{ active: selectedArea === 'all' }"
        :aria-pressed="selectedArea === 'all'"
        @click="selectArea('all')"
      >全部领域</button>
      <button
        v-for="area in areas"
        :key="area.id"
        type="button"
        :class="{ active: selectedArea === area.id }"
        :aria-pressed="selectedArea === area.id"
        @click="selectArea(area.id)"
      >{{ area.title }}</button>
    </nav>

    <div class="sn-result-caption">当前匹配 {{ resultCount }} 个专题 · {{ displayedGroups.length }} 个领域</div>

    <div v-if="!displayedGroups.length" class="sn-empty-results">
      没有找到匹配的领域或专题。你可以换个关键词再试。
    </div>

    <section
      v-for="group in displayedGroups"
      :id="group.id"
      :key="group.id"
      class="sn-library-group"
      :aria-labelledby="`heading-${group.id}`"
    >
      <div class="sn-library-group-intro">
        <div class="sn-library-number">{{ group.symbol }}</div>
        <div>
          <div class="sn-section-code">{{ group.en.toUpperCase() }}</div>
          <h2 :id="`heading-${group.id}`">{{ group.title }}</h2>
          <p>{{ group.description }}</p>
        </div>
        <span class="sn-library-group-size">{{ group.entries.length }} 个专题</span>
      </div>

      <div v-if="group.entries.length" class="sn-library-entry-grid">
        <a v-for="note in group.entries" :key="note.id" :href="withBase(note.link)" class="sn-library-entry">
          <div class="sn-library-entry-overline">{{ note.subtitle }}</div>
          <h3>{{ note.title }}</h3>
          <p>{{ note.description }}</p>
          <div class="sn-library-entry-footer">
            <span>{{ note.state }}</span>
            <strong>进入专题 ↗</strong>
          </div>
        </a>
      </div>
      <div v-else class="sn-library-empty">
        <span class="sn-empty-star" aria-hidden="true">✧</span>
        这个领域还没有建立专题。以后新增笔记，就会自动显示在这里。
      </div>
    </section>

    <footer class="sn-home-footer">
      <span>STARSUNNOTES — KNOWLEDGE INDEX</span>
      <a :href="withBase('/guide/')">查看笔记整理方式 ↗</a>
    </footer>
  </main>
</template>
