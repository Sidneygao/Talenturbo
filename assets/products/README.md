# 产品配图说明

## SmartProfiling 配图

### 文件名
`smartprofiling-bg.png`

### 图片要求
- **尺寸**：建议 1600x900 或 1920x1080（16:9横版）
- **格式**：PNG 或 JPG
- **质量**：高清，适合网页展示

### 创意概念
一个富有创意的视觉隐喻，展示SmartProfiling的核心理念：**精准的技能匹配**

#### 场景描述
1. **环境**：专业的面试房间
   - 现代办公室风格
   - 干净、明亮的灯光
   - 商务氛围

2. **人物**：
   - **面试官**：坐在桌边，专业形象
   - **候选人**：站在门口，准备进入

3. **核心创意元素**：
   - **特殊的门**：门上有两个特殊形状的镂空缺口
     - 一个三角尺形状的缺口
     - 一个扳手形状的缺口
   - **候选人手持**：
     - 左手：三角尺（与门上的缺口完美匹配）
     - 右手：扳手（与门上的缺口完美匹配）
   - **动作**：候选人正将手中的工具对准门上的缺口，准备"通过"

#### 视觉隐喻
- **门的缺口** = 职位的技能要求
- **候选人手中的工具** = 候选人的真实能力
- **完美匹配** = SmartProfiling的精准匹配算法
- **通过门** = 成功入职/内部调动

#### 寓意
只有具备正确技能（形状）的候选人才能通过筛选（进入门），象征SmartProfiling针对特定能力进行精准筛选的核心功能。

### AI生成提示词

#### 英文版（推荐用于DALL-E、Midjourney）
```
A professional interview room scene, horizontal composition, 16:9 aspect ratio. An interviewer sits at a desk in the background. The door has unique cutout shapes - a triangle ruler shape and a wrench shape creating negative space. A candidate is entering through the door, holding a matching triangle ruler in one hand and a wrench in the other hand, aligning them with the door's cutouts to pass through. Modern office setting, clean and professional lighting, business atmosphere, corporate colors (blues and grays). The image symbolizes precise skill matching and talent screening. Photorealistic style, high quality, professional photography look.
```

#### 中文版
```
专业的面试房间场景，横向构图，16:9比例。面试官坐在背景的桌边。门上有独特的镂空形状 - 一个三角尺形状和一个扳手形状的负空间缺口。一位候选人正通过门进入，双手分别拿着匹配的三角尺和扳手，将它们与门上的缺口对齐以通过。现代办公环境，干净专业的灯光，商务氛围，企业色调（蓝色和灰色）。图片象征精准的技能匹配和人才筛选。写实风格，高质量，专业摄影效果。
```

### 备选方案

如果上述创意难以实现，可以使用以下备选：

1. **简化版**：只展示特殊形状的门和候选人手持匹配工具
2. **抽象版**：使用图形化的拼图概念，展示技能匹配
3. **现有图片**：使用Unsplash的面试/招聘主题图片作为临时占位

### 当前配置

代码中已配置：
- **主图片路径**：`assets/products/smartprofiling-bg.png`
- **备用图片**：如果主图片加载失败，自动使用Unsplash的团队会议图片

### 使用步骤

1. 使用AI工具生成图片（推荐：DALL-E 3, Midjourney, Stable Diffusion）
2. 将生成的图片保存为 `smartprofiling-bg.png`
3. 放置在 `assets/products/` 目录下
4. 刷新产品页面查看效果

### 图片优化建议

生成后建议进行以下优化：
- 使用TinyPNG压缩文件大小
- 确保图片宽度至少1600px
- 保持清晰度和专业感
- 色调与网站整体风格协调

## 其他产品配图

如果需要为其他产品创建自定义配图，可以参考相同的流程：

1. 在此目录创建对应的图片文件
2. 更新products.html中的图片路径
3. 添加onerror备用图片

### 建议的文件命名
- `hrcore-bg.png` - HR CORE
- `smartassess-bg.png` - SmartAssess
- `smartprojects-bg.png` - SmartProjects
- `smartisans-bg.png` - Smartisans
- `smartcompliance-bg.png` - SmartCompliance
- `custom-platform-bg.png` - 定制平台
