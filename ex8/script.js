var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();
xhr.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       var dataset = JSON.parse(this.responseText);
       addNewData(dataset);
   }
};
function addNewData(dataset) {
   var myTable = document.getElementById("csie");
   dataset.forEach(function(data, index) {
       var row = myTable.insertRow(-1); // 在表格最後插入一行
       row.insertCell(0).innerHTML = data['title'];
       // 注意：根據講義，地點和票價在 showInfo 陣列的第一筆
       row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
       row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
   });
}
// 刪除舊資料的函數
function delOldData() {
   var myTable = document.getElementById("csie");
   // 保留標題列 (index 0)，刪除其餘所有行
   while (myTable.rows.length > 1) {
       myTable.deleteRow(1);
   }
}
