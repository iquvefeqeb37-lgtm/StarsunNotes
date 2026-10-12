<script setup lang="ts">
import { withBase } from 'vitepress'
import { areas, notebooks, notebooksFor, activeAreaCount, areaById } from '../data/catalog'
</script>

<template>
  <main class="sn-knowledge sn-home-page" id="main-content">
    <div class="sn-utility-strip">
      <span class="sn-utility-dot" aria-hidden="true"></span>
      <span>STARSUNNOTES / PERSONAL KNOWLEDGE ATLAS</span>
      <span class="sn-utility-right">LEARN · CONNECT · REFLECT</span>
    </div>

    <section class="sn-hero" aria-labelledby="sn-hero-title">
      <div class="sn-hero-copy">
        <div class="sn-eyebrow">AN OPEN KNOWLEDGE ARCHIVE <span>✦</span> 持续构建中</div>
        <h1 id="sn-hero-title">知识不止一条路径。<br /><span>让它们慢慢连成星图。</span></h1>
        <p class="sn-hero-intro">
          这里收藏的是逐步建立起来的理解：编程、科学、阅读、创作、
          项目，以及未来遇到的每一个新领域。
        </p>

        <div class="sn-hero-actions">
          <a class="sn-action-primary" :href="withBase('/library/')">浏览知识总览 <span aria-hidden="true">↗</span></a>
          <a class="sn-action-secondary" :href="withBase('/journal/')">查看学习记录 <span aria-hidden="true">→</span></a>
        </div>
        <div class="sn-hero-statline">
          <span>已收录 <b>{{ notebooks.length }}</b> 个专题</span>
          <i aria-hidden="true"></i>
          <span><b>{{ activeAreaCount }}</b> 个领域已有内容</span>
          <i aria-hidden="true"></i>
          <span>持续更新</span>
        </div>
      </div>

      <div class="sn-hero-visual">
        <div class="sn-visual-geometry" aria-hidden="true"></div>
        <img :src="withBase('/celestial-emblem.png')" alt="StarsunNotes 的星辉天体罗盘徽章" />
        <div class="sn-visual-caption">
          <span>FIG. 01 / CELESTIAL ATLAS</span>
          <span>秩序 · 探索 · 生长</span>
        </div>
      </div>
    </section>

    <section class="sn-home-section" aria-labelledby="sn-domains-heading">
      <div class="sn-section-head">
        <div>
          <div class="sn-section-code">01 / KNOWLEDGE DOMAINS</div>
          <h2 id="sn-domains-heading">知识领域</h2>
          <p>这些只是当前的整理框架。以后可以自由增删领域，而不必重做首页。</p>
        </div>
        <a :href="withBase('/library/')" class="sn-plain-link">查看全部目录 <span aria-hidden="true">↗</span></a>
      </div>

      <div class="sn-domain-grid">
        <a
          v-for="area in areas"
          :key="area.id"
          class="sn-domain-card"
          :href="withBase(`/library/#${area.id}`)"
        >
          <div class="sn-domain-card-top">
            <span class="sn-domain-num">{{ area.symbol }}</span>
            <span v-if="notebooksFor(area.id).length" class="sn-domain-count">{{ notebooksFor(area.id).length }} 个专题</span>
            <span v-else class="sn-domain-count sn-muted">尚未归档</span>
          </div>
          <div class="sn-domain-card-mid">
            <span class="sn-domain-en">{{ area.en }}</span>
            <h3>{{ area.title }}</h3>
            <p>{{ area.description }}</p>
          </div>
          <div class="sn-domain-card-footer">
            <span>{{ notebooksFor(area.id).length ? '浏览专题' : '预留领域' }}</span>
            <span aria-hidden="true">↗</span>
          </div>
        </a>
      </div>
    </section>

    <section class="sn-home-section sn-notebooks-section" aria-labelledby="sn-notebooks-heading">
      <div class="sn-section-head">
        <div>
          <div class="sn-section-code">02 / REAL NOTEBOOKS</div>
          <h2 id="sn-notebooks-heading">已建立的专题</h2>
          <p>只展示已经存在的笔记页面，不把尚未开始的学科假装成完成的内容。</p>
        </div>
        <a :href="withBase('/library/')" class="sn-plain-link">专题索引 <span aria-hidden="true">↗</span></a>
      </div>

      <div class="sn-notebook-list">
        <a v-for="(note, index) in notebooks" :key="note.id" :href="withBase(note.link)" class="sn-notebook-row">
          <span class="sn-notebook-ordinal">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="sn-notebook-main">
            <div class="sn-notebook-meta">{{ note.subtitle }} / {{ areaById(note.area)?.title ?? '其他' }}</div>
            <h3>{{ note.title }}</h3>
            <p>{{ note.description }}</p>
          </div>
          <span class="sn-notebook-state">{{ note.state }}</span>
          <span class="sn-notebook-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <section class="sn-home-section sn-workspace-section" aria-labelledby="sn-workspace-heading">
      <div class="sn-section-head">
        <div>
          <div class="sn-section-code">03 / LEARNING WORKSPACE</div>
          <h2 id="sn-workspace-heading">整理与迭代</h2>
          <p>知识不只需要被记录，也需要不断检查、修正与连接。</p>
        </div>
      </div>
      <div class="sn-workspace-grid">
        <a :href="withBase('/guide/')" class="sn-workspace-card">
          <span>METHOD / 01</span>
          <h3>笔记与写作指南</h3>
          <p>从 Markdown 到代码、术语、链接与知识结构。</p>
          <strong>查看指南 ↗</strong>
        </a>
        <a :href="withBase('/journal/')" class="sn-workspace-card">
          <span>LOG / 02</span>
          <h3>学习迭代日志</h3>
          <p>保留卡住的地方、实验过程和真实的理解转变。</p>
          <strong>查看记录 ↗</strong>
        </a>
        <a :href="withBase('/about')" class="sn-workspace-card">
          <span>VISION / 03</span>
          <h3>关于知识库</h3>
          <p>说明如何整理内容，以及这个项目的长期目标。</p>
          <strong>了解更多 ↗</strong>
        </a>
      </div>
    </section>

    <footer class="sn-home-footer">
      <span>STARSUNNOTES — PERSONAL KNOWLEDGE ATLAS</span>
      <span>让每一次理解，都有自己的坐标。</span>
    </footer>
  </main>
</template>
