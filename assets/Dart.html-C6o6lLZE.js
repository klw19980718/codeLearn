import{_ as s,r as a,o as t,c as e,a as p,b as l,w as i,e as c,d as o}from"./app-zYn8bzZB.js";const u={},r=c(`<h1 id="dart使用" tabindex="-1"><a class="header-anchor" href="#dart使用"><span>Dart使用</span></a></h1><p>前言： 系统主要使用为windows，所以以下都是基于windows，之前主要做前端 Javascript开发，所以会对比JS来看待这门语言，写这个目的主要是记录一下在学习dart过程中的随笔。</p><h2 id="dart安装" tabindex="-1"><a class="header-anchor" href="#dart安装"><span>dart安装</span></a></h2><h3 id="windows下安装dart-sdk" tabindex="-1"><a class="header-anchor" href="#windows下安装dart-sdk"><span>Windows下安装Dart SDK</span></a></h3><ul><li>sdk下载网址：https://gekorm.com/dart-windows/</li><li>下载安装完成后，命令行内输入 dart --version 查看dart版本号</li></ul><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>Microsoft Windows [版本 10.0.19045.4170]
(c) Microsoft Corporation。保留所有权利。

C:\\Users\\Administrator&gt;dart --version
Dart SDK version: 3.3.2 (stable) (Tue Mar 19 20:44:48 2024 +0000) on &quot;windows_x64&quot;

C:\\Users\\Administrator&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dart变量、常量、打印、注释" tabindex="-1"><a class="header-anchor" href="#dart变量、常量、打印、注释"><span>Dart变量、常量、打印、注释</span></a></h2><ul><li>变量 | Dart语言中变量基本与Js相同，var a = 1; 同时还支持 String a = &#39;1&#39;; 但是不同与js的是，变量类型不可修改，重新赋值只能赋值为同一类型的值</li><li>常量 | 支持 const 与 final 两种方式创建</li><li>打印 | print()</li><li>注释 | 与Js中相同 // 双反斜号</li></ul><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;dart&#39;</span></span><span class="token punctuation">;</span> 
  <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;hello world&#39;</span></span><span class="token punctuation">;</span> <span class="token comment">// 字符串类型</span>
  <span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  int num2 <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// 创建整型</span>

  <span class="token keyword">const</span> num3 <span class="token operator">=</span> <span class="token number">789</span><span class="token punctuation">;</span> <span class="token comment">// 常量</span>
  <span class="token keyword">final</span> num4 <span class="token operator">=</span> <span class="token number">111</span><span class="token punctuation">;</span> <span class="token comment">// 常量</span>

  <span class="token function">print</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// hello world</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dart常用数据类型" tabindex="-1"><a class="header-anchor" href="#dart常用数据类型"><span>Dart常用数据类型</span></a></h2><h3 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string"><span>字符串(String)</span></a></h3><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>    <span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;hello world&#39;</span></span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Dart&#39;</span></span>
    <span class="token comment">// 字符串拼接</span>
    <span class="token keyword">var</span> str3 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">str2</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">str1</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>
    <span class="token function">print</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span> <span class="token comment">// Dart hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字" tabindex="-1"><a class="header-anchor" href="#数字"><span>数字</span></a></h3><ul><li><p>整型(int)</p><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
int num2 <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>浮点型(double) 浮点型与整型之间可以相互转换，</li></ul><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>
double num4 <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span>
num4 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> 
<span class="token function">print</span><span class="token punctuation">(</span>num4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5.0;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="布尔-bool" tabindex="-1"><a class="header-anchor" href="#布尔-bool"><span>布尔(bool)</span></a></h3><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  bool flgn <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  bool flgn2 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>flgn<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>flgn2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-数组" tabindex="-1"><a class="header-anchor" href="#list-数组"><span>List （数组）</span></a></h3><p>dart中的数组与Javascript数组写法相似 push方法改为add ,对数组末尾插入一个元素</p><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 第一种定义数组的方式</span>
  <span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;a&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 第二种定义数组的方式</span>
  <span class="token class-name">List</span> list2 <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> list3 <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;5&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>list3<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 第三种</span>
  <span class="token keyword">var</span> list4 <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">filled</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>list4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">List</span> list5 <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">filled</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>list5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 第四种</span>

  <span class="token class-name">List</span> list6 <span class="token operator">=</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token function">filled</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>list6<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Maps (对象)</li></ul><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Map</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">&#39;name&#39;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;lisi&quot;</span></span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> maps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  maps<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;nick&#39;</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;123&#39;</span></span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>maps<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dart中的函数" tabindex="-1"><a class="header-anchor" href="#dart中的函数"><span>Dart中的函数</span></a></h2><p>dart中的函数与Javascript中的函数极其相似（而且dart这门语言与js相似度很大）</p><h3 id="函数的定义-以及-作用域" tabindex="-1"><a class="header-anchor" href="#函数的定义-以及-作用域"><span>函数的定义 以及 作用域</span></a></h3><ul><li>函数怎么写<div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&#39;123&#39;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">String</span> nike <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">print</span><span class="token punctuation">(</span>nike<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>函数作用域<div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token class-name">List</span> <span class="token function">getToDoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;123&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;456&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span> mylist <span class="token operator">=</span> <span class="token function">getToDoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">printList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span> mylist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;789&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;1111&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>mylist<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">printList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="函数的可选参数" tabindex="-1"><a class="header-anchor" href="#函数的可选参数"><span>函数的可选参数</span></a></h3><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>  <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   
      <span class="token comment">// 函数的可选参数  可以有两种情况</span>
    <span class="token function">getMyName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token punctuation">[</span>int<span class="token operator">?</span> age<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// name 为必传参数</span>
      <span class="token comment">// age 为可选参数</span>
    <span class="token punctuation">}</span>
    <span class="token function">getmyage</span><span class="token punctuation">(</span>sex<span class="token punctuation">,</span><span class="token punctuation">{</span>age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;lilei&#39;</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">sex</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">age</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">name</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的默认参数" tabindex="-1"><a class="header-anchor" href="#函数的默认参数"><span>函数的默认参数</span></a></h3><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>    <span class="token comment">// 使用命名参数来做默认参数</span>
  <span class="token function">getmyage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;lilei&#39;</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">age</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">name</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用可选参数来做默认参数</span>
  <span class="token function">getmyage2</span><span class="token punctuation">(</span><span class="token punctuation">[</span>int age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 会报错 必传参数不可设置默认值</span>
  <span class="token function">getmyage3</span><span class="token punctuation">(</span>int age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的命名参数" tabindex="-1"><a class="header-anchor" href="#函数的命名参数"><span>函数的命名参数</span></a></h3><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>  <span class="token function">getmyage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;lilei&#39;</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">age</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">name</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getmyage</span><span class="token punctuation">(</span>age<span class="token punctuation">:</span><span class="token number">21</span><span class="token punctuation">,</span>name<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;123&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dart中类class" tabindex="-1"><a class="header-anchor" href="#dart中类class"><span>Dart中类class</span></a></h2><h3 id="class的创建" tabindex="-1"><a class="header-anchor" href="#class的创建"><span>class的创建</span></a></h3><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>    <span class="token comment">//  dart 的 class</span>
  <span class="token keyword">class</span> <span class="token class-name">Peoson</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;LiLei&#39;</span></span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> <span class="token function">getMyname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Peoson</span> people <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Peoson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> name <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">getMyname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class的构造函数" tabindex="-1"><a class="header-anchor" href="#class的构造函数"><span>class的构造函数</span></a></h3><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>    <span class="token comment">//  dart 的 class</span>
    <span class="token keyword">class</span> <span class="token class-name">Peoson</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;LiLei&#39;</span></span><span class="token punctuation">;</span>

      <span class="token comment">// class 中的构造函数</span>
      <span class="token class-name">Peoson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;我使构造函数！！！！&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token class-name">String</span> <span class="token function">getMyname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Peoson</span> people <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Peoson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">var</span> name <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">getMyname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>  <span class="token comment">// 构造函数传递参数</span>
  <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">;</span>
    int age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>

    <span class="token class-name">People</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getPeopleInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&#39;姓名 --- </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">  年龄 </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> lilei <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;lilei&#39;</span></span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    lilei<span class="token punctuation">.</span><span class="token function">getPeopleInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>
    <span class="token comment">//  简写的构造函数传递参数</span>
    <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">;</span>
      int age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>

      <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">getPeopleInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&#39;姓名 --- </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">  年龄 </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> lilei <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;lilei&#39;</span></span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      lilei<span class="token punctuation">.</span><span class="token function">getPeopleInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class的命名构造函数" tabindex="-1"><a class="header-anchor" href="#class的命名构造函数"><span>class的命名构造函数</span></a></h3><pre><code>\`\`\` dart
class People {
  String name = &#39;&#39;;

  // 命名的构造函数
  People.start(name) {


    this.name = name;
  }

}

void main() {
  var lilei = new People.start(&#39;lilei&#39;);
}


\`\`\`
</code></pre><h3 id="class的私有属性" tabindex="-1"><a class="header-anchor" href="#class的私有属性"><span>class的私有属性</span></a></h3><p>私有属性只能在class内部读取，而生成的实例是无法读取的。_name , 私有属性与JS相同</p><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>  <span class="token comment">// dart 中的class 私有变量 私有方法</span>
  <span class="token comment">// class 必须 从其他模块引入才会 实例不可访问 私有变量 私有方法</span>

  <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> _privateVar <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;私有变量&#39;</span></span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> publicVar <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;公有变量&#39;</span></span><span class="token punctuation">;</span>
    <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;我是Animal 构造函数&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ignore: unused_element</span>
    <span class="token keyword">void</span> <span class="token function">_privateMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;我是私有方法&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">publicMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;我是公有方法&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Animal</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>_privateVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>publicVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
    dog<span class="token punctuation">.</span><span class="token function">_privateMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class的静态成员" tabindex="-1"><a class="header-anchor" href="#class的静态成员"><span>class的静态成员</span></a></h3><ul><li>静态标识符 static</li><li>class静态方法中无法获取普通方法与普通属性</li></ul><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token class-name">String</span> color <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">;</span>
  <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">mormalMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;普通方法&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;静态方法&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class继承" tabindex="-1"><a class="header-anchor" href="#class继承"><span>class继承</span></a></h2><ul><li>class的继承 extends 关键字</li><li>class构造函数 constructor([options]) : super([options])</li><li>class方法复写</li></ul><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> weight <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">;</span>

  <span class="token class-name">Animal</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>weight <span class="token operator">=</span> weight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">getWeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Animal&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> color <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> weight <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">;</span>
  <span class="token class-name">Dog</span><span class="token punctuation">(</span>weight<span class="token punctuation">,</span> color<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>weight <span class="token operator">=</span> weight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 方法复写</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">getWeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;dog&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dart中的抽象class以及接口" tabindex="-1"><a class="header-anchor" href="#dart中的抽象class以及接口"><span>Dart中的抽象class以及接口</span></a></h2><h3 id="抽象class-abstract-class" tabindex="-1"><a class="header-anchor" href="#抽象class-abstract-class"><span>抽象class abstract Class</span></a></h3><p>定义抽象类 继承 抽象类</p><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  late <span class="token class-name">String</span> weight<span class="token punctuation">;</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token comment">// extends 实现抽象类必须完成 抽象类中方法</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口-class-implements" tabindex="-1"><a class="header-anchor" href="#接口-class-implements"><span>接口 class implements</span></a></h3><p>接口与抽象类的不同</p><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token comment">// 抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  late <span class="token class-name">String</span> weight<span class="token punctuation">;</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token comment">// extends 实现抽象类必须完成 抽象类中方法</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token comment">// 接口 必须全部都完成 抽象类中的方法以及属性</span>
  <span class="token metadata function">@override</span>
  late <span class="token class-name">String</span> weight<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement eat</span>
    <span class="token keyword">throw</span> <span class="token class-name">UnimplementedError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dart中的泛型" tabindex="-1"><a class="header-anchor" href="#dart中的泛型"><span>Dart中的泛型</span></a></h2><h3 id="泛型方法" tabindex="-1"><a class="header-anchor" href="#泛型方法"><span>泛型方法</span></a></h3><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token comment">// 泛型方法 T methodsName&lt;T&gt; (T options){} </span>
<span class="token comment">// 两个T 一个对 返回值进行校验 一个对传参进行校验</span>
<span class="token comment">// MethodsName&lt;Strinig&gt; (&#39;123&#39;)</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 泛型是做类型校验</span>
  <span class="token class-name">T</span> getValue<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span>getValue<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;123&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类"><span>泛型类</span></a></h3>`,60);function d(k,v){const n=a("RouteLink");return t(),e("div",null,[r,p("p",null,[l(n,{to:"/"},{default:i(()=>[o("返回首页")]),_:1})])])}const b=s(u,[["render",d],["__file","Dart.html.vue"]]),g=JSON.parse('{"path":"/dart/Dart.html","title":"Dart使用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"dart安装","slug":"dart安装","link":"#dart安装","children":[{"level":3,"title":"Windows下安装Dart SDK","slug":"windows下安装dart-sdk","link":"#windows下安装dart-sdk","children":[]}]},{"level":2,"title":"Dart变量、常量、打印、注释","slug":"dart变量、常量、打印、注释","link":"#dart变量、常量、打印、注释","children":[]},{"level":2,"title":"Dart常用数据类型","slug":"dart常用数据类型","link":"#dart常用数据类型","children":[{"level":3,"title":"字符串(String)","slug":"字符串-string","link":"#字符串-string","children":[]},{"level":3,"title":"数字","slug":"数字","link":"#数字","children":[]},{"level":3,"title":"布尔(bool)","slug":"布尔-bool","link":"#布尔-bool","children":[]},{"level":3,"title":"List （数组）","slug":"list-数组","link":"#list-数组","children":[]}]},{"level":2,"title":"Dart中的函数","slug":"dart中的函数","link":"#dart中的函数","children":[{"level":3,"title":"函数的定义 以及 作用域","slug":"函数的定义-以及-作用域","link":"#函数的定义-以及-作用域","children":[]},{"level":3,"title":"函数的可选参数","slug":"函数的可选参数","link":"#函数的可选参数","children":[]},{"level":3,"title":"函数的默认参数","slug":"函数的默认参数","link":"#函数的默认参数","children":[]},{"level":3,"title":"函数的命名参数","slug":"函数的命名参数","link":"#函数的命名参数","children":[]}]},{"level":2,"title":"Dart中类class","slug":"dart中类class","link":"#dart中类class","children":[{"level":3,"title":"class的创建","slug":"class的创建","link":"#class的创建","children":[]},{"level":3,"title":"class的构造函数","slug":"class的构造函数","link":"#class的构造函数","children":[]},{"level":3,"title":"class的命名构造函数","slug":"class的命名构造函数","link":"#class的命名构造函数","children":[]},{"level":3,"title":"class的私有属性","slug":"class的私有属性","link":"#class的私有属性","children":[]},{"level":3,"title":"class的静态成员","slug":"class的静态成员","link":"#class的静态成员","children":[]}]},{"level":2,"title":"class继承","slug":"class继承","link":"#class继承","children":[]},{"level":2,"title":"Dart中的抽象class以及接口","slug":"dart中的抽象class以及接口","link":"#dart中的抽象class以及接口","children":[{"level":3,"title":"抽象class abstract Class","slug":"抽象class-abstract-class","link":"#抽象class-abstract-class","children":[]},{"level":3,"title":"接口 class implements","slug":"接口-class-implements","link":"#接口-class-implements","children":[]}]},{"level":2,"title":"Dart中的泛型","slug":"dart中的泛型","link":"#dart中的泛型","children":[{"level":3,"title":"泛型方法","slug":"泛型方法","link":"#泛型方法","children":[]},{"level":3,"title":"泛型类","slug":"泛型类","link":"#泛型类","children":[]}]}],"git":{"updatedTime":1713277216000,"contributors":[{"name":"F_Hark","email":"7732569+f__hark@user.noreply.gitee.com","commits":2},{"name":"Klw","email":"1287428463@qq.com","commits":2}]},"filePathRelative":"dart/Dart.md"}');export{b as comp,g as data};
