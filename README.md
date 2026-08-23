# iY English - 智能英文詞彙學習平台

## 🎯 快速開始

### 1️⃣ 打開終端/命令提示字元

**Windows**:
- 按 `Win + R`
- 輸入 `cmd` 後按 Enter

**Mac**:
- 按 `Command + Space`
- 搜尋 `Terminal` 並打開

**Linux**:
- 按 `Ctrl + Alt + T`

### 2️⃣ 進入項目目錄

```bash
cd iy-english
```

### 3️⃣ 安裝依賴

```bash
npm install
```

### 4️⃣ 啟動開發伺服器

```bash
npm run dev
```

### 5️⃣ 自動打開網頁

✅ 瀏覽器會自動打開，訪問：
- **主地址**: `http://localhost:3000`
- **備用地址**: `http://127.0.0.1:3000`

如果沒有自動打開，請手動複製上面的網址到瀏覽器。

---

## 🔧 如果網頁還是打不開

### 方案 1: 清除緩存重新安裝

```bash
# 按 Ctrl+C 停止伺服器（如果正在運行）

# Windows
rmdir /s /q node_modules
del package-lock.json
npm install
npm run dev

# Mac/Linux
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### 方案 2: 使用不同的端口

如果 3000 端口被占用，使用其他端口：

```bash
npm run dev -- --port 4000
```

然後訪問: `http://localhost:4000`

### 方案 3: 檢查系統環境

確認已安裝 Node.js (v16 或以上)：

```bash
node --version
npm --version
```

如果沒有安裝，請從 https://nodejs.org/ 下載安裝。

---

## 🌐 修改網址

如果要改變網址的主機名或端口，編輯 `vite.config.ts`：

```typescript
server: {
  port: 3000,        // 改變端口號 (如 5000, 8080 等)
  host: 'localhost', // 改變主機 (localhost 或 0.0.0.0)
  strictPort: false,  // false = 端口被占用時自動換端口
  open: true,        // true = 自動打開瀏覽器
}
```

修改後重新運行 `npm run dev`。

---

## 👤 登入演示

進入應用後會看到登入頁面：
- **郵箱**: 任意郵箱 (如 test@example.com)
- **密碼**: 任意密碼 (如 123456)
- **用戶名**: 註冊時可選輸入

點擊登入/註冊即可進入應用。

---

## 📦 功能清單

✅ 🎧 聆聽功能 - 原生語音播放
✅ 📸 OCR 圖片識別 - 提取圖片中的文字
✅ 🔄 間隔重複系統 - SM-2 算法智能複習
✅ 📊 數據可視化 - 柱狀圖、餅圖統計
✅ 🔐 用戶認證 - 登入/註冊系統
✅ 📚 詞本管理 - 自定義詞本
✅ 💾 本地存儲 - 離線數據保存

---

## 🆘 常見問題

**Q: npm install 很慢？**
A: 切換 npm 鏡像源：
```bash
npm config set registry https://registry.npmmirror.com
```

**Q: 終端顯示 "command not found: npm"？**
A: 說明 Node.js 沒有正確安裝，請重新安裝 Node.js。

**Q: 按 Ctrl+C 後如何重新啟動？**
A: 直接再次輸入 `npm run dev`。

---

## 📞 技術支援

遇到問題？檢查以下幾點：
1. ✓ Node.js 版本 >= 16
2. ✓ npm install 成功完成
3. ✓ 防火牆未阻止本地連接
4. ✓ 3000 或指定端口未被占用
5. ✓ 複製正確的網址到瀏覽器

---

**祝您學習愉快！🎉**
