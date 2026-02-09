# Google 表單自動填寫小幫手 / Google Form Auto-Fill Assistant 🚀

<div align="right">

[中文](#chinese) | [English](#english)

</div>

<a name="chinese"></a>
## 中文說明

### 這是什麼？
這是一個方便的工具，可以幫你偵測題目包含的文字，自動填寫任何 Google 表單！再也不用一直重複輸入相同的資料了。

### 下載連結 / Download
👉 [點我下載 / Click to Download](https://github.com/blues32767/Google-Form-Auto-Fill-Extension/releases/download/Google-Forms-auto-fill-Extension/Google-Forms-auto-fill-Extension.zip)

說明網頁：https://blues32767.github.io/Google-Form-Auto-Fill-Extension/

## ☕ 支持開發者 (Support Me)

如果您覺得這個工具幫您省下了寶貴的時間，歡迎請我喝杯咖啡，這將支持我繼續維護與開發更多好用的工具！

If this tool saved you time, consider buying me a coffee! Your support helps me maintain this project and build more open-source tools.

<a href="https://www.buymeacoffee.com/blues32767" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

### 功能特點 ✨
- 偵測題目包含的文字，自動填寫QA.txt設定的對照的答案
- 自訂你想要的預設答案
- 節省重複填寫表單的時間

### 使用步驟 📝

#### 第一步：設定答案 ⚙️
1. 用記事本打開 `QA.txt`
2. 照以下格式填寫你的答案：
   ```
   問題關鍵字,答案
   姓名,王小明
   電話,0912345678
   複選題木,答案1,答案2,答案3
   ```
3. QA.txt參考，請自行修改：
   ```
   # 中文
   姓名,測試者
   手機,0999999999
   電話,0999999999
   身高/體重,200/99
   身高,200
   體重,99
   生日,1989/06/04
   mail,9999@example.com
   信箱,9999@example.com
   性別,女
   語言能力,中文,chinese,英文,english,日文,japanese
   
   #社群帳號-SocialID
   ig,https://www.instagram.com/
   instagram,https://www.instagram.com/
   fb,https://www.facebook.com/
   facebook,https://www.facebook.com/
   line,
   wechat,
      
   # 備註-不要的那行可以刪除
   # 複選格式：題目包含名稱,值1,值2,值3（多值用逗號分隔，單值直接寫）
   # 複選示例：熟悉語言,中文,英文,日文
   
   ```
4. 執行「執行我-把QA更新到content.bat」
5. 等待更新完成訊息

#### 第二步：安裝擴充功能 🔧
1. 打開 Chrome 瀏覽器
2. 在網址列輸入：`chrome://extensions/`
3. 右上角開啟「開發人員模式」
4. 點擊左上角「載入未封裝項目」
5. 選擇剛才解壓縮的資料夾

### 適合使用對象 👥
- 經常需要填寫各種表單的人
- 常常要輸入相同資料的使用者
- 想要節省填表時間的任何人

### 適合職業 💼
- 藝人/演員：經常需要填寫試鏡、通告表單
- 補教老師：定期填寫課程回報、教學紀錄
- 業務人員：需要填寫客戶資料、拜訪紀錄
- 活動主持人：經常報名活動、填寫演出資料
- 自由工作者：常需填寫各種合作提案表單
- 學生：頻繁填寫課程報名、活動登記表

### 使用須知 ⚠️
- 目前只支援文字欄位的自動填寫
- 不支援下拉選單
- 修改答案後需要更新設定並重新載入擴充功能

### 常見問題 ❓

#### 基本操作問題
**Q: 如何確認擴充功能正常運作？**  
A: 開啟 Google 表單時，文字欄位會自動填入你設定的答案。

**Q: 填錯了怎麼辦？**  
A: 可以直接在表單上修改，送出前請記得檢查答案。

#### 技術相關問題
**Q: MAC 系統如何更新 content.js？**  
A: MAC 系統使用者可以按照以下步驟更新：
1. 在 Finder 中找到擴充功能資料夾
2. 右鍵點擊 content.js，選擇「用文字編輯打開」
3. 修改完成後儲存
4. 到 Chrome 擴充功能頁面重新載入擴充功能

**Q: 更新 QA.txt 後要如何重新載入擴充功能？**  
A: 請依序執行以下步驟：
1. 儲存修改後的 QA.txt
2. 執行「執行我-把QA更新到content.bat」
3. 前往 Chrome 擴充功能頁面（chrome://extensions/）
4. 找到「Google 表單自動填寫小幫手」
5. 點擊擴充功能卡片右下角的重新整理圖示 🔄
6. 或是直接關閉 Chrome 後重新開啟

**更新日期20250413-新增自動選擇單選題、複選框。
---

<a name="english"></a>
## English Guide

### What is this?
This is a convenient tool that helps you automatically fill in any Google Forms by detecting question text and filling in your predefined answers. Say goodbye to repetitive form filling!

### Download
👉 [Click to Download](https://github.com/blues32767/Google-Form-Auto-Fill-Extension/releases/download/Google-Forms-auto-fill-Extension/Google-Forms-auto-fill-Extension.zip)

Documentation: https://blues32767.github.io/Google-Form-Auto-Fill-Extension/

## ☕ 支持開發者 (Support Me)

如果您覺得這個工具幫您省下了寶貴的時間，歡迎請我喝杯咖啡，這將支持我繼續維護與開發更多好用的工具！

If this tool saved you time, consider buying me a coffee! Your support helps me maintain this project and build more open-source tools.

<a href="https://www.buymeacoffee.com/blues32767" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

### Features ✨
- Detects question text and automatically fills in answers based on your QA.txt settings
- Customizable default answers for all your forms
- Saves time on repetitive form filling

### Setup Guide 📝

#### Step 1: Configure Your Answers ⚙️
1. Open `QA.txt` with Notepad
2. Enter your answers in this format:
   ```
   question keyword,answer
   name,John Doe
   phone,0912345678
   multiple choice,answer1,answer2,answer3
   ```
3. QA.txt reference (modify as needed):
   ```
   # English
   name,Test User
   mobile,0999999999
   phone,0999999999
   height/weight,200/99
   height,200
   weight,99
   birthday,1989/06/04
   mail,9999@example.com
   email,9999@example.com
   gender,female
   sex,girl
   language skills,Chinese,English,Japanese
   
   # Social Media IDs
   ig,https://www.instagram.com/
   instagram,https://www.instagram.com/
   fb,https://www.facebook.com/
   facebook,https://www.facebook.com/
   line,
   wechat,
   
   # Notes - Delete lines you don't need
   # Multiple choice format: question keyword,value1,value2,value3 (multiple values separated by commas)
   # Multiple choice example: languages,Chinese,English,Japanese
   ```
4. Run "Execute-UpdateQAToContent.bat"
5. Wait for the update completion message

#### Step 2: Install the Extension 🔧
1. Open Chrome browser
2. Enter in address bar: `chrome://extensions/`
3. Enable "Developer mode" in top right
4. Click "Load unpacked" in top left
5. Select the extracted folder

### Ideal For 👥
- People who frequently fill out various forms
- Users who repeatedly enter the same information
- Anyone looking to save time on form filling

### Perfect For These Professions 💼
- Artists/Actors: Frequently filling out audition and booking forms
- Teachers: Regularly completing course reports and teaching records
- Sales Representatives: Needing to fill customer data and visit records
- Event Hosts: Often registering for events and providing performance details
- Freelancers: Constantly filling out various collaboration proposal forms
- Students: Frequently completing course registrations and event sign-up forms

### Important Notes ⚠️
- Currently supports automatic filling of text fields
- Supports radio buttons and checkboxes
- After modifying answers, you need to update settings and reload the extension

### FAQ ❓

#### Basic Operations
**Q: How do I know if the extension is working?**  
A: Text fields will automatically fill when you open a Google Form.

**Q: What if I need to correct an auto-filled answer?**  
A: You can directly edit any field in the form before submitting.

#### Technical Issues
**Q: How do MAC users update content.js?**  
A: MAC users can follow these steps:
1. Locate the extension folder in Finder
2. Right-click on content.js and select "Open with TextEdit"
3. Make your changes and save
4. Reload the extension in Chrome extensions page

**Q: How to properly reload the extension after updating QA.txt?**  
A: Follow these steps:
1. Save your modified QA.txt
2. Run "Execute-UpdateQAToContent.bat"
3. Go to Chrome extensions page (chrome://extensions/)
4. Find "Google Form Auto-Fill Assistant"
5. Click the refresh icon 🔄 in the bottom right of the extension card
6. Alternatively, close and reopen Chrome

**Update 04/13/2025 - Added support for automatically selecting radio buttons and checkboxes.**

---

<div align="center">

🌐 Select your language above to view the guide in your preferred language

</div>
