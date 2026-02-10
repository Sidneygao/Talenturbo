# LOGO 切换说明

## 问题

当前 LOGO.jpg 图片本身包含中文文字，无法通过 JavaScript 改变图片内容。

## 解决方案

代码已更新为支持根据语言切换不同的 LOGO 图片：

### 文件命名规则
- `LOGO-zh.jpg` - 中文版 LOGO（包含中文文字）
- `LOGO-en.jpg` - 英文版 LOGO（只有英文或图形）
- `LOGO.jpg` - 默认 LOGO（作为后备）

### 工作原理
1. 当语言为中文时，加载 `LOGO-zh.jpg`
2. 当语言为英文时，加载 `LOGO-en.jpg`
3. 如果对应语言的 LOGO 不存在，自动回退到 `LOGO.jpg`

## 需要做的事情

### 选项 1：准备两个版本的 LOGO（推荐）

1. **创建英文版 LOGO**
   - 打开 LOGO.jpg
   - 去除或隐藏中文文字
   - 只保留 "Talenturbo" 英文部分
   - 保存为 `LOGO-en.jpg`

2. **创建中文版 LOGO**
   - 将当前的 LOGO.jpg 复制一份
   - 重命名为 `LOGO-zh.jpg`

3. **放置文件**
   - 将 `LOGO-zh.jpg` 和 `LOGO-en.jpg` 放在网站根目录
   - 与 `LOGO.jpg` 在同一位置

### 选项 2：只使用一个 LOGO（临时方案）

如果暂时无法准备两个版本的 LOGO：
- 保持当前的 `LOGO.jpg`
- 代码会自动回退使用这个文件
- 但中英文版本都会显示相同的 LOGO

## 测试

准备好 LOGO 文件后：

1. 清除浏览器缓存
2. 打开网站（中文版）
3. 应该看到 `LOGO-zh.jpg`（或 `LOGO.jpg`）
4. 点击 EN 切换到英文
5. LOGO 应该切换为 `LOGO-en.jpg`（或保持 `LOGO.jpg`）

## 验证

在浏览器控制台执行：

```javascript
// 查看当前 LOGO 的 src
var logo = document.querySelector('.logo-img');
console.log('LOGO src:', logo.src);

// 切换语言
window.ExquisysI18n.toggleLang();

// 再次查看 LOGO 的 src
setTimeout(function() {
  console.log('LOGO src after toggle:', logo.src);
}, 100);
```

## 文件结构示例

```
网站根目录/
├── LOGO.jpg          # 默认 LOGO（后备）
├── LOGO-zh.jpg       # 中文版 LOGO（需要创建）
├── LOGO-en.jpg       # 英文版 LOGO（需要创建）
├── index.html
├── products.html
└── ...
```

## 注意事项

1. 确保三个 LOGO 文件的尺寸一致，避免切换时出现跳动
2. 建议使用相同的图片格式（都用 JPG 或都用 PNG）
3. 如果使用 PNG 格式，可以支持透明背景
4. 文件名必须完全匹配（区分大小写）

## 当前状态

✅ 代码已更新，支持 LOGO 切换
⏳ 等待提供 `LOGO-zh.jpg` 和 `LOGO-en.jpg` 文件

如果暂时无法提供两个版本的 LOGO，当前代码会自动使用 `LOGO.jpg` 作为后备，不会影响网站正常运行。
