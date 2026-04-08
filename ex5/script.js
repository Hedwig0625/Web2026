var count = 1;

function addfunction() {

  // 1. 建立一個新的 <button> 元素

  var btn = document.createElement("BUTTON");

  // 2. 設定按鈕文字，包含目前的次數

  btn.innerHTML = "CLICK ME (" + count + ")";

  // 3. 設定唯一 ID，例如 btn_1, btn_2...

  btn.setAttribute("id", "btn_" + count);

  // 4. 加入 Bootstrap 的樣式類別

  btn.setAttribute("class", "btn btn-outline-danger m-1");

  // 5. 將按鈕掛載到網頁的 body 中

  document.body.appendChild(btn);

  console.log("Added:", btn);

  // 計數器加 1，為了下一個按鈕準備

  count++;

}

function delfunction() {

  // 這裡的邏輯是刪除「最後一個」產生的按鈕

  if (count > 1) {

    count--; // 先將計數器減回上一個數字

    // 根據 ID 找到那個按鈕

    var btn = document.getElementById("btn_" + count);

    if (btn) {

      // 從 body 中移除該按鈕

      document.body.removeChild(btn);

      console.log("Deleted ID: btn_" + count);

    }

  } else {

    console.log("沒有按鈕可以刪除了！");

  }

}
 