<a id="zh"></a>
# 🚀 Google Form Auto-Fill (Google 表單自動填)

🌍 **Language:** [繁體中文](#zh) | [English](#en) | [日本語](#ja) | [한국어](#ko) | [ภาษาไทย](#th) | [Español](#es) | [Português](#pt)

> ### 🌐 項目介紹 | Project Introduction
>
> | Language | Link |
> | :--- | :--- |
> | 🇹🇼 **繁體中文** | [介紹網頁](https://blues32767.github.io/Google-Form-Auto-Fill-Extension/?lang=zh) |
> | 🇺🇸 **English** | [Introduction Page](https://blues32767.github.io/Google-Form-Auto-Fill-Extension/?lang=en) |
> | 🇯🇵 **日本語** | [紹介ページ](https://blues32767.github.io/Google-Form-Auto-Fill-Extension/?lang=ja) |
> | 🇰🇷 **한국어** | [소개 페이지](https://blues32767.github.io/Google-Form-Auto-Fill-Extension/?lang=ko) |
> | 🇹🇭 **ภาษาไทย** | [หน้าแนะนำ](https://blues32767.github.io/Google-Form-Auto-Fill-Extension/?lang=th) |
> | 🇪🇸 **Español** | [Página de presentación](https://blues32767.github.io/Google-Form-Auto-Fill-Extension/?lang=es) |
> | 🇵🇹 **Português** | [Página de introdução](https://blues32767.github.io/Google-Form-Auto-Fill-Extension/?lang=pt) |

---
---

<div align="center">

### 🔥 [👉 點此前往 Chrome 線上應用程式商店安裝（完全免費）](https://chromewebstore.google.com/detail/fbienifgcnebfgefaeccnmgekfcdedkc?utm_source=item-share-cb)

**💖 支持開發者持續維護開發：**<br>
<a href="https://www.buymeacoffee.com/blues32767" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" height="60"></a>

</div>

---

## 🌟 為什麼你需要這個擴充功能？

**這是一個能讓你「一鍵自動填好表單」的神奇工具！**
不需要懂複雜的電腦設定，只要提早輸入好你要填寫的內容，時間一到或打開表單時，系統就會瞬間幫你把所有格子填滿，讓你永遠比別人快一步！

**超適合：**
- 👉 **身心障礙朋友的得力助手：** 減少打字負擔，輕鬆跨越數位落差！
- 🎤 **搶報名、搶票、搶限量周邊：** 超快速一次填寫完設定的內容自動送出！
- 🎭 **藝人：** 申請試鏡、通告
- 💼 **業務：** 客戶資料填報、拜訪表
- 💻 **自由工作者：** 合作提案報名
- 📝 **學生：** 課程報名、活動表單

🔥 強大功能清單：

- 👤 多設定檔管理：建立多組個人資料，一鍵切換「自己、家人、朋友」的不同資訊。
- 🚀 自動提交模式：填寫完畢自動點擊提交按鈕，極速完成任務。
- ✅ 自動勾選：智慧偵測並勾選「傳送副本」與「同意服務條款」。
- 🎯 最長匹配優先：智慧判斷題目，優先匹配最精確的關鍵字（如：優先匹配「全名」而非「名」）。
- 🌐 多國語言支援：提供中、英、日、韓、泰、西、葡等語系介面。
- 🛡️ 隱私安全：所有規則僅儲存在您的瀏覽器本地端，絕不上傳任何個人資訊。
---

## 📖 如何使用？(How to use?)

1. 將擴充功能加到你的瀏覽器。
2. 開啟任何一個 Google 表單。
3. 點擊瀏覽器右上角的擴充功能圖示，把你想預先準備好的(題目,回覆)資料填入並存檔。
4. 未來打開任何Google表單時，資料就會抓取題目,將回覆**自動填寫完畢**！

---

## 💡 詳細設定規則與精選範例 (Configuration Examples)

**【範例範本(關鍵字,要填寫的內容)】**
```csv
姓名,王小明
性別,男
mail,user@gmail.com
電話,0912345678
手機,0912345678
語言,中文,英文,日文
```

擴充功能會使用「**關鍵字**」來尋找題目，只要表單題目字眼**包含**您設定的關鍵字，系統就會自動將對應的「**填寫內容**」填入或勾選。

### 1️⃣ 電子郵件 (Email)
範例：mail,user@gmail.com
- **設定「關鍵字」**：`mail`
- **設定「填寫內容」**：`user@gmail.com`
- 🎯 **實際效果**：不論表單上的題目是「Email」、「電子郵件(Email)」、「您的 e-mail」，只要題目中包含 `mail`（不分大小寫），就會自動幫您填入信箱！

### 2️⃣ 複選題的多個答案 (多重勾選 Checkboxes)
範例：語言,中文,英文,日文
- **設定「關鍵字」**：`語言`
- **設定「填寫內容」**：`中文,英文,日文` (請用英文半形逗號 `,` 隔開多個選項字眼)
- 🎯 **實際效果**：當遇到題目如「您會使用什麼語言？」並提供多個核取方塊時，系統會自動在選項中尋找，並幫你**同時勾選**「中文」、「英文」及「日文」的三個選項！

### 3️⃣ 單選題或下拉式選單 (Radio / Dropdown)
範例：性別,男
- **設定「關鍵字」**：`性別`
- **設定「填寫內容」**：`男`
- 🎯 **實際效果**：當遇到單選題目為「您的性別是？」或是下拉選單「請選擇性別」，只要該選項裡有標示「男」，系統就會自動點擊或選中該選項。

### 4️⃣ 一般短答輸入 (文字 Text / Name)
範例：姓名,王小明
- **設定「關鍵字」**：`姓名`
- **設定「填寫內容」**：`王小明`
- 🎯 **實際效果**：題目如「報名者姓名」、「您的真實姓名為」，會自動在文字框填入「王小明」。

### 5️⃣ 電話號碼 (Phone number)
範例：電話,0912345678
手機,0912345678
- **設定「關鍵字」**：`電話`
- **設定「填寫內容」**：`0912345678`
- 🎯 **實際效果**：遇到「聯絡電話」、「手機號碼（或電話）」等欄位，都會自動帶入號碼。

---


---

## 🌍 多國語言介紹 (Multilingual Description)

<a id="en"></a>
### 🇺🇸 English
**Google Form Auto-Fill**

<div align="center">

### 🔥 [👉 Install for free from Chrome Web Store](https://chromewebstore.google.com/detail/fbienifgcnebfgefaeccnmgekfcdedkc?utm_source=item-share-cb)

**💖 Support the developer's continuous maintenance:**<br>
<a href="https://www.buymeacoffee.com/blues32767" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" height="60"></a>

</div>

A magical tool that fills out forms for you with just one click! No technical skills required. Set your content in advance, and in the future, when you open any Google Form, the extension will grab the questions and auto-fill the replies for you instantly so you're always one step ahead!
**Highly recommended for:**
- 👉 **Assistive tool for users with disabilities:** Reduces typing effort and easily bridges the digital divide!
- 🎤 **Snagging tickets, limited editions, or fast registrations:** Auto-fill and submit everything super fast!
- 🎭 **Artists/Actors:** Audition and casting applications.
- 💼 **Sales/Business:** Quick data entry for customer details or visit reports.
- 💻 **Freelancers:** Collaboration proposals and applications.
- 📝 **Students:** Registering for popular classes and event forms.

#### 💡 Configuration Examples
The extension uses "**Keywords**" to find questions. If a form question **contains** your keyword, the system will automatically fill in or select your "**Fill-in content**".

**【Example Template (Keyword, Fill-in Content)】**
```csv
Name,John Doe
Gender,Male
mail,user@gmail.com
Phone,1234567890
Mobile,1234567890
Language,English,Spanish,French
```

**1️⃣ Email**
- **Set "Keyword"**: `mail`
- **Set "Fill-in content"**: `user@gmail.com`
- 🎯 **Effect**: Whether the question is "Email", "Your e-mail", etc., as long as it contains `mail` (case-insensitive), it will auto-fill your email!

**2️⃣ Checkboxes (Multiple Answers)**
- **Set "Keyword"**: `Language`
- **Set "Fill-in content"**: `English,Spanish,French` (Use a half-width comma `,` to separate options)
- 🎯 **Effect**: For a question like "What languages do you speak?" with multiple checkboxes, the system will automatically check "English", "Spanish", and "French" at the same time!

**3️⃣ Radio / Dropdown**
- **Set "Keyword"**: `Gender`
- **Set "Fill-in content"**: `Male`
- 🎯 **Effect**: For a single-choice question "What is your gender?" or a dropdown "Select your gender", if the option contains "Male", it will be automatically clicked or selected.

**4️⃣ Short Text / Name**
- **Set "Keyword"**: `Name`
- **Set "Fill-in content"**: `John Doe`
- 🎯 **Effect**: For questions like "Applicant Name", it will auto-fill "John Doe" into the text box.

**5️⃣ Phone number**
- **Set "Keyword"**: `Phone`
- **Set "Fill-in content"**: `1234567890`
- 🎯 **Effect**: Automatically fills in the number for fields like "Contact phone" or "Mobile number".

---

<a id="ja"></a>
### 🇯🇵 日本語 (Japanese)
**Google フォーム自動入力 (Google Form Auto-Fill)**

<div align="center">

### 🔥 [👉 Chrome ウェブストアから無料でインストール](https://chromewebstore.google.com/detail/fbienifgcnebfgefaeccnmgekfcdedkc?utm_source=item-share-cb)

**💖 開発者の継続的な開発を支援する:**<br>
<a href="https://www.buymeacoffee.com/blues32767" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" height="60"></a>

</div>

事前に入力内容を設定しておくことで、今後あらゆる Google フォームを開く際、質問を自動的に取得し、すべての項目を自動入力・選択する魔法のようなツールです。パソコンの難しい知識は不要です！
**こんな方におすすめ：**
- 🎤 **チケットや限定グッズの申し込み、先着順の予約：** 超高速で自動入力・送信し、誰よりも早く申し込みを完了！
- 🎭 **アーティスト：** オーディションや出演の応募など。
- 💼 **営業・ビジネス：** 顧客データや訪問記録の迅速な入力。
- 💻 **フリーランサー：** 案件への応募や提案。
- 📝 **学生：** 人気の授業登録やイベント申し込み。

#### 💡 詳細設定テンプレートと活用例 (Configuration Examples)
拡張機能は「**キーワード**」を使用して質問を探します。フォームの質問にキーワードが**含まれていれば**、システムが対応する「**入力内容**」を自動的に入力またはチェックします。

**【入力例テンプレート（キーワード, 入力内容）】**
```csv
名前,山田太郎
性別,男性
mail,user@gmail.com
電話,09012345678
携帯,09012345678
言語,日本語,英語,中国語
```

**1️⃣ メールアドレス (Email)**
- **「キーワード」の設定**: `mail`
- **「入力内容」の設定**: `user@gmail.com`
- 🎯 **実際の効果**: 質問が「Email」、「電子メール」などであっても、`mail` が含まれていれば（大文字・小文字問わず）、自動的にメールアドレスを入力します！

**2️⃣ チェックボックス (複数選択 Checkboxes)**
- **「キーワード」の設定**: `言語`
- **「入力内容」の設定**: `日本語,英語,中国語` (複数の選択肢は半角カンマ `,` で区切ってください)
- 🎯 **実際の効果**: 「話せる言語は？」といった質問で複数のチェックボックスがある場合、システムが「日本語」「英語」「中国語」を**同時にチェック**します！

**3️⃣ ラジオボタン / プルダウン (Radio / Dropdown)**
- **「キーワード」の設定**: `性別`
- **「入力内容」の設定**: `男性`
- 🎯 **実際の効果**: 質問が「あなたの性別は？」やプルダウン「性別を選択」の場合、選択肢に「男性」があれば自動的に選択されます。

**4️⃣ テキスト入力 / 名前 (Text / Name)**
- **「キーワード」の設定**: `名前`
- **「入力内容」の設定**: `山田太郎`
- 🎯 **実際の効果**: 「申込者の名前」や「氏名」のような質問に対し、自動的に「山田太郎」と入力します。

**5️⃣ 電話番号 (Phone number)**
- **「キーワード」の設定**: `電話`
- **「入力内容」の設定**: `09012345678`
- 🎯 **実際の効果**: 「連絡先電話番号」や「携帯番号」などの入力欄に自動的に番号を入力します。

---

<a id="ko"></a>
### 🇰🇷 한국어 (Korean)
**Google 설문지 자동 채우기 (Google Form Auto-Fill)**

<div align="center">

### 🔥 [👉 Chrome 웹 스토어에서 무료 설치](https://chromewebstore.google.com/detail/fbienifgcnebfgefaeccnmgekfcdedkc?utm_source=item-share-cb)

**💖 개발자의 지속적인 업데이트 후원하기:**<br>
<a href="https://www.buymeacoffee.com/blues32767" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" height="60"></a>

</div>

컴퓨터를 잘 몰라도 괜찮습니다! 미리 입력할 내용을 설정해두면 앞으로 어떤 Google 설문지를 열든 질문을 자동으로 추출하여 모든 항목이 1초 만에 자동으로 채워지는 마법 같은 도구입니다.
**강력 추천 대상：**
- 🎤 **수강신청, 티켓팅, 한정판 굿즈 구매：** 초고속으로 자동 입력하고 제출하여 누구보다 빠르게!
- 🎭 **연예인/지망생：** 오디션 및 캐스팅 지원.
- 💼 **영업 사원：** 고객 데이터 및 방문 일지 빠른 작성.
- 💻 **프리랜서：** 협업 제안 및 신청.
- 📝 **학생：** 인기 강의 수강신청 및 이벤트 참여.

#### 💡 상세 설정 템플릿 및 활용 예시 (Configuration Examples)
확장 프로그램은 "**키워드**"를 사용하여 질문을 찾습니다. 설문지 질문에 설정한 키워드가 **포함되어** 있으면 시스템이 해당하는 "**입력 내용**"을 자동으로 입력하거나 선택합니다.

**【예시 템플릿 (키워드, 입력 내용)】**
```csv
이름,홍길동
성별,남성
mail,user@gmail.com
전화,01012345678
휴대폰,01012345678
언어,한국어,영어,일본어
```

**1️⃣ 이메일 (Email)**
- **"키워드" 설정**: `mail`
- **"입력 내용" 설정**: `user@gmail.com`
- 🎯 **실제 효과**: 질문이 "Email", "이메일 주소" 등이라도 `mail`이 포함되어 있으면(대소문자 구분 없음) 자동으로 이메일이 입력됩니다!

**2️⃣ 체크박스 (다중 선택 Checkboxes)**
- **"키워드" 설정**: `언어`
- **"입력 내용" 설정**: `한국어,영어,일본어` (여러 옵션은 반각 쉼표 `,` 로 구분하세요)
- 🎯 **실제 효과**: "사용할 수 있는 언어는?"과 같은 질문에 체크박스가 여러 개 있을 때, 시스템이 자동으로 "한국어", "영어", "일본어"를 **동시에 체크**합니다!

**3️⃣ 라디오 버튼 / 드롭다운 (Radio / Dropdown)**
- **"키워드" 설정**: `성별`
- **"입력 내용" 설정**: `남성`
- 🎯 **실제 효과**: 단일 선택 질문 "성별이 어떻게 되십니까?" 또는 드롭다운 "성별 선택"에서 "남성" 옵션이 있으면 자동으로 클릭 또는 선택됩니다.

**4️⃣ 짧은 답변 / 이름 (Text / Name)**
- **"키워드" 설정**: `이름`
- **"입력 내용" 설정**: `홍길동`
- 🎯 **실제 효과**: "신청자 이름", "본명"과 같은 질문 텍스트 상자에 자동으로 "홍길동"을 입력합니다.

**5️⃣ 전화번호 (Phone 번호)**
- **"키워드" 설정**: `전화`
- **"입력 내용" 설정**: `01012345678`
- 🎯 **실제 효과**: "연락처", "휴대전화 번호" 등의 필드에 자동으로 번호를 입력합니다.

---

<a id="th"></a>
### 🇹🇭 ภาษาไทย (Thai)
**กรอก Google Form อัตโนมัติ (Google Form Auto-Fill)**

<div align="center">

### 🔥 [👉 ติดตั้งฟรีจาก Chrome Web Store](https://chromewebstore.google.com/detail/fbienifgcnebfgefaeccnmgekfcdedkc?utm_source=item-share-cb)

**💖 สนับสนุนนักพัฒนาเพื่อการอัปเดตอย่างต่อเนื่อง:**<br>
<a href="https://www.buymeacoffee.com/blues32767" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" height="60"></a>

</div>

เครื่องมือวิเศษที่จะช่วยคุณกรอกฟอร์มได้ในพริบตา! ไม่จำเป็นต้องเก่งคอมพิวเตอร์ เพียงตั้งค่าข้อมูลไว้ล่วงหน้า ต่อจากนี้เมื่อคุณเปิด Google Form ใดๆ ระบบจะดึงคำถามและกรอกข้อมูลทั้งหมดให้คุณให้โดยอัตโนมัติทันที มั่นใจได้ว่าคุณจะไวกว่าคนอื่นเสมอ!
**เหมาะอย่างยิ่งสำหรับ：**
- 🎤 **แย่งคิวบัตรคอนเสิร์ต สินค้าลิมิเต็ด หรือลงทะเบียนตามคิว：** กรอกข้อมูลอย่างรวดเร็วและส่งได้ทันที!
- 🎭 **ศิลปิน/นักแสดง：** สมัครออดิชั่นหรืองานแสดง.
- 💼 **พนักงานขาย：** กรอกข้อมูลลูกค้าหรือรายงานการเยี่ยมชมอย่างรวดเร็ว.
- 💻 **ฟรีแลนซ์：** ยื่นข้อเสนอความร่วมมือต่างๆ.
- 📝 **นักเรียน/นักศึกษา：** ลงทะเบียนเรียนวิชาฮิต หรือฟอร์มกิจกรรม.

#### 💡 ตัวอย่างการตั้งค่าแบบละเอียด (Configuration Examples)
ส่วนขยายนี้ใช้ "**คำค้นหา (Keyword)**" เพื่อค้นหาคำถาม หากคำถามในฟอร์ม**มี**คำค้นหาที่คุณตั้งไว้ ระบบจะกรอกหรือเลือก "**เนื้อหาที่ต้องการกรอก**" ให้โดยอัตโนมัติ

**【ตัวอย่างแม่แบบ (คำค้นหา, เนื้อหาที่ต้องการกรอก)】**
```csv
ชื่อ,สมชาย
เพศ,ชาย
mail,user@gmail.com
โทรศัพท์,0812345678
มือถือ,0812345678
ภาษา,ไทย,อังกฤษ,จีน
```

**1️⃣ อีเมล (Email)**
- **ตั้งค่า "คำค้นหา"**: `mail`
- **ตั้งค่า "เนื้อหาที่ต้องการกรอก"**: `user@gmail.com`
- 🎯 **ผลลัพธ์**: ไม่ว่าคำถามจะเป็น "Email" หรือ "อีเมลของคุณ" ตราบใดที่มีคำว่า `mail` (ไม่สนใจตัวพิมพ์เล็กพิมพ์ใหญ่) ระบบจะกรอกอีเมลให้คุณทันที!

**2️⃣ ช่องทำเครื่องหมาย (เลือกได้หลายข้อ Checkboxes)**
- **ตั้งค่า "คำค้นหา"**: `ภาษา`
- **ตั้งค่า "เนื้อหาที่ต้องการกรอก"**: `ไทย,อังกฤษ,จีน` (ใช้เครื่องหมายจุลภาคแบบครึ่งตัวอักษร `,` เพื่อคั่นตัวเลือก)
- 🎯 **ผลลัพธ์**: เมื่อเจอคำถามเช่น "คุณใช้ภาษาอะไรได้บ้าง?" และมีช่องให้เลือกหลายช่อง ระบบจะ**ติ๊กเลือก** "ไทย", "อังกฤษ" และ "จีน" ให้พร้อมกันทันที!

**3️⃣ ปุ่มตัวเลือก / เมนูแบบเลื่อนลง (Radio / Dropdown)**
- **ตั้งค่า "คำค้นหา"**: `เพศ`
- **ตั้งค่า "เนื้อหาที่ต้องการกรอก"**: `ชาย`
- 🎯 **ผลลัพธ์**: หากมีคำถามให้เลือกเพียงข้อเดียวเช่น "เพศของคุณคือ?" หรือเมนู "โปรดเลือกเพศ" ตราบใดที่ตัวเลือกนั้นมีคำว่า "ชาย" ระบบจะคลิกเลือกให้โดยอัตโนมัติ

**4️⃣ ข้อความสั้น / ชื่อ (Text / Name)**
- **ตั้งค่า "คำค้นหา"**: `ชื่อ`
- **ตั้งค่า "เนื้อหาที่ต้องการกรอก"**: `สมชาย`
- 🎯 **ผลลัพธ์**: สำหรับคำถามเช่น "ชื่อผู้สมัคร" หรือ "ชื่อจริงของคุณ" ระบบจะกรอกคำว่า "สมชาย" ลงในช่องข้อความโดยอัตโนมัติ

**5️⃣ หมายเลขโทรศัพท์ (Phone number)**
- **ตั้งค่า "คำค้นหา"**: `โทรศัพท์`
- **ตั้งค่า "เนื้อหาที่ต้องการกรอก"**: `0812345678`
- 🎯 **ผลลัพธ์**: ระบบจะกรอกเบอร์โทรให้อัตโนมัติเมื่อเจอช่องเช่น "เบอร์โทรศัพท์ติดต่อ" หรือ "มือถือ"

---

<a id="es"></a>
### 🇪🇸 Español (Spanish)
**Autocompletado de Formularios de Google (Google Form Auto-Fill)**

<div align="center">

### 🔥 [👉 Instalar gratis desde Chrome Web Store](https://chromewebstore.google.com/detail/fbienifgcnebfgefaeccnmgekfcdedkc?utm_source=item-share-cb)

**💖 Apoya al desarrollador para futuras actualizaciones:**<br>
<a href="https://www.buymeacoffee.com/blues32767" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" height="60"></a>

</div>

¡Una herramienta mágica que rellena los formularios por ti en un solo clic! No se requieren conocimientos técnicos. Configura tus datos con antelación y, en el futuro, cuando abras cualquier Formulario de Google, la herramienta capturará las preguntas y completará las respuestas de forma automática al instante. ¡Serás el más rápido!
**Súper recomendado para：**
- 🎤 **Conseguir entradas, productos limitados o registrarse rápido：** ¡Completa todo en un segundo y envíalo automáticamente antes que los demás!
- 🎭 **Artistas：** Solicitudes de audiciones o casting.
- 💼 **Comerciales：** Entrada rápida de datos de clientes o informes de visitas.
- 💻 **Autónomos y Freelancers：** Propuestas de colaboración.
- 📝 **Estudiantes：** Inscripción a cursos muy demandados o eventos.

#### 💡 Ejemplos de Configuración Detallada (Configuration Examples)
La extensión usa "**Palabras clave (Keywords)**" para buscar preguntas. Si el texto de la pregunta **contiene** tu palabra clave, el sistema ingresará o seleccionará automáticamente el "**Contenido a rellenar**".

**【Plantilla de ejemplo (Palabra clave, Contenido a rellenar)】**
```csv
Nombre,Juan Pérez
Género,Masculino
mail,user@gmail.com
Teléfono,123456789
Móvil,123456789
Idioma,Español,Inglés,Francés
```

**1️⃣ Correo electrónico (Email)**
- **Establecer "Palabra clave"**: `mail`
- **Establecer "Contenido a rellenar"**: `user@gmail.com`
- 🎯 **Efecto**: Ya sea que la pregunta diga "Email", "Correo electrónico", etc., siempre que contenga `mail` (sin importar si son mayúsculas o minúsculas), ¡se autocompletará tu correo!

**2️⃣ Casillas de verificación (Respuestas múltiples / Checkboxes)**
- **Establecer "Palabra clave"**: `Idioma`
- **Establecer "Contenido a rellenar"**: `Español,Inglés,Francés` (Usa una coma `,` para separar las diferentes opciones)
- 🎯 **Efecto**: Para una pregunta como "¿Qué idiomas hablas?" con múltiples casillas de verificación, el sistema marcará **automáticamente y al mismo tiempo** "Español", "Inglés" y "Francés".

**3️⃣ Botones de opción / Lista desplegable (Radio / Dropdown)**
- **Establecer "Palabra clave"**: `Género`
- **Establecer "Contenido a rellenar"**: `Masculino`
- 🎯 **Efecto**: Al encontrar una pregunta de opción única como "¿Cuál es tu género?" o "Selecciona tu género", si la opción contiene "Masculino", el sistema hará clic o elegirá esa opción automáticamente.

**4️⃣ Respuesta corta / Nombre (Text / Name)**
- **Establecer "Palabra clave"**: `Nombre`
- **Establecer "Contenido a rellenar"**: `Juan Pérez`
- 🎯 **Efecto**: En preguntas como "Nombre del solicitante" o "Tu nombre real", se rellenará automáticamente "Juan Pérez" en la caja de texto.

**5️⃣ Número de teléfono (Phone number)**
- **Establecer "Palabra clave"**: `Teléfono`
- **Establecer "Contenido a rellenar"**: `123456789`
- 🎯 **Efecto**: Rellenará automáticamente los campos como "Teléfono de contacto" o "Número de móvil".

---

<a id="pt"></a>
### 🇵🇹 Português (Portuguese)
**Preenchimento Automático do Google Forms (Google Form Auto-Fill)**

<div align="center">

### 🔥 [👉 Instale gratuitamente na Chrome Web Store](https://chromewebstore.google.com/detail/fbienifgcnebfgefaeccnmgekfcdedkc?utm_source=item-share-cb)

**💖 Apoie o desenvolvedor para atualizações contínuas:**<br>
<a href="https://www.buymeacoffee.com/blues32767" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" height="60"></a>

</div>

Uma ferramenta mágica para preencher formulários para você em apenas um clique! Sem necessidade de conhecimentos em informática. Configure seu conteúdo com antecedência e, no futuro, ao abrir qualquer Google Form, o sistema capturará as perguntas e preencherá as respostas instantaneamente para você estar sempre um passo à frente.
**Altamente recomendado para：**
- 🎤 **Disputar ingressos, produtos limitados ou inscrições concorridas：** Preencha tudo super rápido de uma vez e envie automaticamente!
- 🎭 **Artistas：** Inscrições para testes ou casting.
- 💼 **Vendedores/Comerciais：** Lançamento rápido de dados de clientes ou relatórios de visitas.
- 💻 **Freelancers：** Propostas de colaboração e inscrições.
- 📝 **Estudantes：** Inscrições em disciplinas concorridas e formulários de eventos.

#### 💡 Exemplos de Configuração (Configuration Examples)
A extensão utiliza "**Palavras-chave (Keywords)**" para buscar perguntas. Se a pergunta **contiver** a senha/palavra-chave que você configurou, o sistema detectará automaticamente e escolherá/digitará o "**Conteúdo de preenchimento**".

**【Modelo de exemplo (Palavra-chave, Conteúdo)】**
```csv
Nome,João da Silva
Gênero,Masculino
mail,user@gmail.com
Telefone,912345678
Celular,912345678
Idioma,Português,Inglês,Espanhol
```

**1️⃣ E-mail (Email)**
- **Configurar "Palavra-chave"**: `mail`
- **Configurar "Conteúdo"**: `user@gmail.com`
- 🎯 **Efeito**: Não importa se a pergunta é "Email" ou "Seu e-mail", desde que contenha `mail` (não diferencia maiúsculas de minúsculas), ele preencherá seu e-mail automaticamente!

**2️⃣ Caixas de Seleção (Múltiplas Escolhas / Checkboxes)**
- **Configurar "Palavra-chave"**: `Idioma`
- **Configurar "Conteúdo"**: `Português,Inglês,Espanhol` (Use uma vírgula `,` para separar múltiplas opções)
- 🎯 **Efeito**: Quando encontrar uma pergunta como "Quais idiomas você fala?" e houver caixas de seleção, o sistema **marcará simultaneamente** as opções "Português", "Inglês" e "Espanhol"!

**3️⃣ Botão de Opção / Menu Suspenso (Radio / Dropdown)**
- **Configurar "Palavra-chave"**: `Gênero`
- **Configurar "Conteúdo"**: `Masculino`
- 🎯 **Efeito**: Quando encontrar a pergunta "Qual é o seu gênero?" ou o menu "Selecione seu gênero", se a opção possuir "Masculino", o sistema clicará ou selecionará essa opção automaticamente.

**4️⃣ Texto Curto / Nome (Text / Name)**
- **Configurar "Palavra-chave"**: `Nome`
- **Configurar "Conteúdo"**: `João da Silva`
- 🎯 **Efeito**: Em questões como "Nome do candidato" ou "Seu nome real", preencherá "João da Silva" automaticamente na caixa de texto.

**5️⃣ Número de Telefone (Phone number)**
- **Configurar "Palavra-chave"**: `Telefone`
- **Configurar "Conteúdo"**: `912345678`
- 🎯 **Efeito**: Campos como "Telefone para contato" ou "Celular" receberão automaticamente o número.
