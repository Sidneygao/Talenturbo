# LOGO + 文字方案说明

## 实现方案

采用 **LOGO 图片 + 文字** 的组合方式，通过切换文字部分来实现中英文版本的区别。

## 结构

```html
<a href="index.html" class="logo-link">
  <img src="LOGO.jpg" alt="Talenturbo" class="logo-img">
  <span class="logo-text" data-i18n="logo.text">玄码智创</span>
</a>
```

## 显示效果

### 中文版
```
[LOGO 图片] 玄码智创
```

### 英文版
```
[LOGO 图片] Talenturbo
```

## 样式特点

- LOGO 图片和文字水平排列
- 使用 `gap: 12px` 控制间距
- 文字样式：
  - 字号：32px（桌面）、28px（平板）、20px（移动）
  - 字重：600（半粗体）
  - 字间距：2px（桌面）、1px（移动）
  - 颜色：跟随主题色

## 响应式设计

### 桌面端（默认）
- LOGO 高度：192px
- 文字大小：32px
- 间距：12px

### 平板端（≤1024px）
- LOGO 高度：144px
- 文字大小：28px

### 移动端（≤768px）
- LOGO 高度：96px
- 文字大小：20px
- 间距：8px

## 优势

1. ✅ **无需准备多个图片文件** - 只需一个 LOGO.jpg
2. ✅ **自动切换** - 通过 data-i18n 属性自动翻译
3. ✅ **易于维护** - 修改文字只需更新翻译文件
4. ✅ **响应式** - 自动适配不同屏幕尺寸
5. ✅ **灵活** - 可以轻松调整样式和间距

## 翻译配置

在 `js/i18n.js` 中已添加：

```javascript
zh: {
  'logo.text': '玄码智创',
  // ...
},
en: {
  'logo.text': 'Talenturbo',
  // ...
}
```

## 测试

### 方法 1：使用测试页面
打开 `test-logo-text.html` 查看效果

### 方法 2：使用实际页面
1. 清除浏览器缓存
2. 打开任意页面
3. 点击语言切换按钮
4. 观察 LOGO 旁边的文字变化

### 方法 3：浏览器控制台
```javascript
// 查看当前 LOGO 文字
var logoText = document.querySelector('.logo-text');
console.log('LOGO 文字:', logoText.textContent);

// 切换语言
window.ExquisysI18n.toggleLang();

// 再次查看
setTimeout(function() {
  console.log('切换后 LOGO 文字:', logoText.textContent);
}, 100);
```

## 已修改的文件

- ✅ index.html - 添加 logo-text
- ✅ products.html - 添加 logo-text
- ✅ services.html - 添加 logo-text
- ✅ cases.html - 添加 logo-text
- ✅ partners.html - 添加 logo-text
- ✅ about.html - 添加 logo-text
- ✅ css/style.css - 添加 logo-text 样式
- ✅ js/i18n.js - 添加翻译文本
- ✅ js/main.js - 简化 updateCompanyName 函数

## 注意事项

1. 确保 LOGO 图片本身不包含文字，或者文字部分不会与添加的文字重复
2. 如果 LOGO 图片已经包含 "Talenturbo" 文字，可以考虑：
   - 选项 A：使用不含文字的 LOGO 图片
   - 选项 B：调整 logo-text 的显示内容
   - 选项 C：隐藏 logo-text，只显示图片

## 自定义

如果需要调整样式，修改 `css/style.css` 中的 `.logo-text` 类：

```css
.logo-text {
  font-size: 32px;        /* 调整字号 */
  font-weight: 600;       /* 调整字重 */
  color: var(--text);     /* 调整颜色 */
  letter-spacing: 2px;    /* 调整字间距 */
}
```

## 总结

这个方案完美解决了 LOGO 中英文切换的问题，无需准备多个图片文件，通过简单的 HTML 结构和 CSS 样式就能实现专业的效果。
