# Middleware 實作
加入協助偵測伺服器收到及回應請求時間的 middleware

## 安裝專案
```
$git clone https://github.com/gisela-land/middleware-practice.git
$cd middleware-practice
$npm install
$npm run dev 
```

## 網站功能
- 在執行的終端機環境印出伺服器收到請求的時間、方法、URL 及 回應處理的間隔時間

## 如何使用網站
- 輸入 <a>http://localhost:3000</a>，終端機會輸出執行時間紀錄
- 在 <a>http://localhost:3000</a> 後加入 "/new" 或 /:id"，終端機亦會輸出對應的執行時間紀錄
