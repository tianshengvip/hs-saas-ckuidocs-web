import{_ as n,c as a,e as l,o as e}from"./app.8c8eb218.js";const d=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5"},{"level":2,"title":"vite\u914D\u7F6E","slug":"vite\u914D\u7F6E"},{"level":2,"title":"\u5BFC\u5165\u540E\u5728\u9875\u9762\u4E2D\u4F7F\u7528","slug":"\u5BFC\u5165\u540E\u5728\u9875\u9762\u4E2D\u4F7F\u7528"}],"relativePath":"guild/quickstart.md"}'),p={name:"guild/quickstart.md"};function t(o,s,c,i,r,C){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 CaoKunTSVue3UI</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5728main.ts\u4E2D\u5BFC\u5165 \u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import CaokunTsvue3UI from &#39;caokun-tsvue3-ui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;../node_modules/caokun-tsvue3-ui/lib/style.css&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(CaokunTsvue3UI).mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vite\u914D\u7F6E" tabindex="-1">vite\u914D\u7F6E <a class="header-anchor" href="#vite\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u914D\u7F6E\u5F00\u53D1\u73AF\u5883/\u751F\u4EA7\u73AF\u5883(\u8981\u53BB\u6389\u70B9\u524D\u9762\u7684\u53CD\u659C\u6760\uFF0C\u8FD9\u662Fmarkdown\u7684\u4E00\u4E2A\u5751\uFF1F)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { UserConfig, ConfigEnv, defineConfig, loadEnv } from &quot;vite&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig(({ mode }: ConfigEnv): UserConfig =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const env = loadEnv(mode, process.cwd());</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    define: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;process\\.env.NODE_ENV&#39;: JSON.stringify(process\\.env.NODE_ENV || &#39;development&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5BFC\u5165\u540E\u5728\u9875\u9762\u4E2D\u4F7F\u7528" tabindex="-1">\u5BFC\u5165\u540E\u5728\u9875\u9762\u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5BFC\u5165\u540E\u5728\u9875\u9762\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;hn-info-collapse title=&quot;\u7EC4\u4EF6hn-info-collapse&quot; style=&quot;width: 100%&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template #content&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;hn-info-collapse \u7684\u5185\u5BB9\u533A\u57DF&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/hn-info-collapse&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;hn-left-jewel-box title=&quot;\u7EC4\u4EF6hn-left-jewel-box&quot; style=&quot;width: 100%&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template #content&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;hn-left-jewel-box \u7684\u5185\u5BB9\u533A\u57DF&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/hn-left-jewel-box&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8)]))}var u=n(p,[["render",t]]);export{d as __pageData,u as default};
