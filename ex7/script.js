const container = document.getElementById("container");
// 1. 新增：宣告一個變數來記錄「連續錯誤」的次數
let mistakeCount = 0;
function generateRandomChars(length) {
   let result = '';
   const chars = 'abcdefghijklmnopqrstuvwxyz';
   for (let i = 0; i < length; i++) {
       result += chars.charAt(Math.floor(Math.random() * chars.length));
   }
   return result;
}
window.onload = function() {
   // 建議這裡加個 +1 確保一開始至少有 1 個字，避免初始值為 0
   const initialChars = generateRandomChars(Math.floor(Math.random() * 3) + 1);
   container.textContent = initialChars;
   container.focus();
};
window.addEventListener("keyup", function(e) {
   console.log("按下的鍵:", e.key);
   // 依據投影片建議，改用 textContent 來操作 DOM
   let currentText = container.textContent;
   if (currentText.length > 0) {
       // 檢查第一個字元是否和按下的鍵相等
       if (e.key === currentText.charAt(0)) {
           // ====================
           // 【答對的情況】
           // ====================
           mistakeCount = 0; // 答對了，連續錯誤次數「歸零」
           currentText = currentText.substring(1);
           const newChars = generateRandomChars(Math.floor(Math.random() * 3) + 1);
           currentText += newChars;
       } else {
           // ====================
           // 【答錯的情況】
           // ====================
           mistakeCount++; // 連續錯誤次數 + 1
           // 參考投影片的第一張圖，打錯時原本可能會把按錯的鍵直接加進去
           currentText += e.key;
           // 判斷是否連續打錯 3 次
           if (mistakeCount >= 3) {
               // 滿足條件：額外增加 3 個亂數產生的字串
               const extraPenaltyChars = generateRandomChars(3);
               currentText += extraPenaltyChars;
               // 懲罰完畢後，將錯誤次數歸零重新計算 (視你希望的遊戲規則而定)
               mistakeCount = 0;
           }
       }
       // 將更新後的字串寫回畫面上
       container.textContent = currentText;
   }
});