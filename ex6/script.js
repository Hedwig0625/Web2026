// 取得 HTML 中的 container 元素

const container = document.getElementById("container");

// 輔助函式：產生隨機 a-z 字串

function generateRandomChars(length) {

    let result = '';

    const chars = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {

        result += chars.charAt(Math.floor(Math.random() * chars.length));

    }

    return result;

}

// 2. window.onload 時，產生 0 到 2 個字元

window.onload = function() {

    const initialChars = generateRandomChars(Math.floor(Math.random() * 3)); // 0, 1, 或 2

    container.innerHTML = initialChars;

    container.focus(); // 自動聚焦，方便直接打字

};

// 3 & 4. 監聽 keyup 事件

window.addEventListener("keyup", function(e) {

    console.log("按下的鍵:", e.key);

    let currentText = container.innerHTML;

    // 檢查第一個字元是否和按下的鍵相等

    if (currentText.length > 0 && e.key === currentText.charAt(0)) {

        // 消除該字元 (從第二個字開始截取)

        currentText = currentText.substring(1);

        // 4. 同時產生 1 到 3 個新字元接在後面

        const newChars = generateRandomChars(Math.floor(Math.random() * 3) + 1); // 1, 2, 或 3

        currentText += newChars;

        // 更新畫面

        container.innerHTML = currentText;

    }

});
 