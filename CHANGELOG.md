# Changelog

## [1.1.0] - 2026-06-10

### 新增
- `cards.json`：將卡片資料（cardDetails、cardScoring）從 script.js 抽離為獨立 JSON 檔，方便日後更新活動辦法

### 修正
- **style.css**：修正 `*/` 孤立語法錯誤（原 CSS 解析異常）；清除 6 個選擇器的重複定義（card-item、card-img-placeholder、card-name、reward-text、detail-btn、item-segment）
- **script.js**：國泰 CUBE 卡申請連結從假的 `...` 改為正確連結；元大分享黑啤卡 `name` 補回「分享」二字；第一銀行 iLeo 卡 perks 錯字「定行動支付」修正為「指定行動支付」；永豐 SPORT 卡描述補充說明 7% 需滿足運動健身條件；新增 fetch 錯誤處理，載入失敗時顯示提示而非靜默壞掉
- **index.html**：蝦皮購物聯名卡回饋數字從 10% 修正為實際最高 7%；momo 聯名卡回饋數字從 5% 修正為實際最高 10%
- **knowledge.html**：補上遺漏的 footer
- **suggest.html**：下拉選單補上「momo購物網」與「蝦皮購物」兩個情境選項
- **style.css**：補上 `@keyframes slideDown`，修復 modal 彈窗滑入動畫從未生效的問題

## [1.0.0] - 初始版本

- 首頁卡片推薦（國內消費、出國旅遊、網購/行動支付、生活風格/分期）
- 輪播圖
- 卡片詳情彈窗
- 基本知識頁面
- 智能卡片推薦頁面
