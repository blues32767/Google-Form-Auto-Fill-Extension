# Google表單自動填寫擴充套件 Google Form Auto-Fill Extension 🚀

一個智慧型的Google表單自動填寫的瀏覽器擴充套件，可以自動匹配並填入預設答案，讓你從重複填寫表單中解放！

A smart Google Form auto-filling tool that automatically matches and fills in preset answers, freeing you from repetitive form filling!

擴充功能下載（Download）：https://github.com/blues32767/Google-Form-Auto-Fill-Extension/releases/download/Google-Forms-auto-fill-Extension/Google-Forms-auto-fill-Extension.zip

## 主要特點 Key Features ✨
- 智慧匹配：自動識別表單欄位關鍵字，並匹配相應答案
- 支援多種欄位：文字、日期、單選、下拉選單等
- 可自訂答案：輕鬆修改預設回答
- 即時生效：安裝擴充套件後立即可用

- Smart Matching: Automatically identifies form fields and matches corresponding answers
- Multiple Field Support: Text, dates, radio buttons, dropdowns, etc.
- Customizable Answers: Easily modify default responses
- Instant Effect: Ready to use upon installation

## 適合對象 Perfect For 👥
- 藝人/演員：經常需要填寫試鏡、通告表單
  Actors/Performers: Frequently filling audition and booking forms
- 補教老師：定期填寫課程回報、教學紀錄
  Teachers: Regular course reports and teaching records
- 業務人員：需要填寫客戶資料、拜訪紀錄
  Sales Representatives: Customer data and visit records
- 活動主持人：經常報名活動、填寫演出資料
  Event Hosts: Event registration and performance details
- 自由工作者：常需填寫各種合作提案表單
  Freelancers: Various collaboration proposal forms
- 學生：頻繁填寫課程報名、活動登記表
  Students: Course registration and activity sign-up forms

## 安裝方式 Installation
1. 下載並解壓縮檔案[https://github.com/blues32767/Google-Form-Auto-Fill-Extension/releases/download/Google-Forms-auto-fill-Extension/Google-Forms-auto-fill-Extension.zip]
   Download and extract files
2. 打開Chrome瀏覽器，進入擴充功能管理頁面
   Open Chrome browser, go to extension management
3. 開啟開發人員模式
   Enable Developer mode
4. 點選「載入未封裝項目」
   Click "Load unpacked"
5. 選擇解壓縮後的資料夾
   Select the extracted folder

## 使用方式 How to Use
1. 修改QA.txt檔案，設定你的預設答案
   Modify QA.txt file to set your default answers
2. 執行「執行我-Execute-me-auto-update-QA-To-content(自動把QA更新到content)」更新設定
   Run "執行我-Execute-me-auto-update-QA-To-content(自動把QA更新到content)" to update settings
3. 重新載入擴充功能
   Reload the extension
4. 開啟任何Google表單，擴充功能會自動運作
   Open any Google Form, the extension will work automatically

## 注意事項 Notes
- 請確保填寫的資料正確性
  Please ensure the accuracy of filled information
- 建議在送出前檢查填寫內容
  Recommended to check content before submission

## 預設答案修改方式 How to Modify Default Answers
Google表單自動填入答案，要修改預設回覆，請改QA.txt再執行「執行我-Execute-me-auto-update-QA-To-content(自動把QA更新到content).bat」，或直接修改content.js，可以用記事本修改，或修改
Google Form Auto-fill Answers. To modify default values, please edit content.js using Notepad.


## QA.txt 格式說明 QA.txt Format Guide 📝

### 基本格式 Basic Format
題目，答案
Question text, Answer

### 格式說明 Format Description
- 每行一組問答配對
  One pair of Q&A per line
- 使用逗號分隔題目和答案
  Use comma to separate question and answer
- 題目欄位可填入「可能包含的文字」
  Question field can contain "possible text"

### 範例 Examples
name,blues
姓名,王小明
電話,0912345678

### 實際運作說明 How it Works
當表單題目包含您設定的文字時，會自動填入對應答案
When the form question contains your set text, it will auto-fill with the corresponding answer

例如 For example:
- 表單題目：「請填寫您的姓名」
  Form question: "Please enter your name"
- 因為題目包含「姓名」，所以會自動填入「王小明」
  Since the question contains "姓名", it will auto-fill "王小明"

### 注意事項 Notes
- 請確保逗號為半形符號
  Please use half-width comma
- 每行只能有一個逗號（一組配對）
  Only one comma (one pair) per line
- 不需要加入引號
  No need to add quotation marks


## 功能限制 Limitations ⚠️
1. 目前僅支援文字輸入框的自動填寫，僅適用於電腦瀏覽器。
2. 不支援單選、多選或下拉選單的自動選擇
3. 修改設定後需要執行更新步驟：
   - 修改完QA.txt後，執行"執行我-Execute-me-auto-update-QA-To-content(自動把QA更新到content).bat"
   - 到Chrome擴充功能頁面重新載入本擴充功能
   - 或移除後重新載入擴充功能

1. Currently only supports auto-filling text input fields
2. Does not support auto-selection of radio buttons, checkboxes, or dropdown menus
3. After modifying settings, you need to:
   - Run "執行我-Execute-me-auto-update-QA-To-content(自動把QA更新到content).bat" after editing QA.txt
   - Reload the extension in Chrome extensions page
   - Or remove and reload the extension
