# LOGO 临时解决方案

如果暂时无法准备两个版本的 LOGO 图片，可以使用以下临时方案：

## 方案 A：使用 CSS 裁剪（如果中英文在图片的不同位置）

如果 LOGO 图片中：
- 左侧是英文 "Talenturbo"
- 右侧是中文 "玄码智创"

可以使用 CSS 裁剪：

```css
/* 英文版：只显示左侧部分 */
html[lang="en"] .logo-img {
  object-fit: cover;
  object-position: left center;
  width: 200px; /* 调整宽度只显示英文部分 */
}

/* 中文版：显示完整图片 */
html[lang="zh-CN"] .logo-img {
  width: auto;
}
```

## 方案 B：使用文字覆盖（不推荐）

在 LOGO 旁边添加文字，英文版隐藏中文：

```html
<div class="logo-wrapper">
  <img src="LOGO.jpg" class="logo-img">
  <span class="logo-text-zh">玄码智创</span>
</div>
```

```css
html[lang="en"] .logo-text-zh {
  display: none;
}
```

## 方案 C：接受现状（最简单）

如果 LOGO 设计本身是中英文结合的品牌标识：
- 保持 LOGO 在中英文版本中都显示相同
- 这在很多国际品牌中也是常见做法
- 只需确保 alt 属性正确切换即可

## 推荐做法

**最佳方案**：准备两个版本的 LOGO 图片
- 使用图片编辑软件（Photoshop、GIMP、Figma 等）
- 创建只有英文的版本
- 保存为 LOGO-en.jpg

**临时方案**：如果 LOGO 是品牌标识的一部分，可以保持不变
- 很多国际公司的 LOGO 在不同语言版本中都是相同的
- 例如：可口可乐、麦当劳等品牌的 LOGO 在全球都一样

## 当前代码行为

当前代码会尝试加载：
1. 中文版：`LOGO-zh.jpg` → 如果不存在，回退到 `LOGO.jpg`
2. 英文版：`LOGO-en.jpg` → 如果不存在，回退到 `LOGO.jpg`

所以即使没有准备两个版本的 LOGO，网站也能正常运行，只是中英文版本会显示相同的 LOGO。
