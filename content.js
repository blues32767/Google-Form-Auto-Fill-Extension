























// 硬編碼的欄位映射設定
const fieldMappings = [
    { field: "姓名", value: "測試者" }
    ,
    { field: "手機", value: "0999999999" }
    ,
    { field: "電話", value: "0999999999" }
    ,
    { field: "身高/體重", value: "200/99" }
    ,
    { field: "身高", value: "200" }
    ,
    { field: "體重", value: "99" }
    ,
    { field: "生日", value: "1989/06/04" }
    ,
    { field: "mail", value: "9999@example.com" }
    ,
    { field: "信箱", value: "9999@example.com" }
    ,
    { field: "性別", value: "女" }
    ,
    { field: "語言能力", value: ["中文", "chinese", "英文", "english", "日文", "japanese"] }
    ,
    { field: "name", value: "test name" }
    ,
    { field: "phone", value: "0999999999" }
    ,
    { field: "high/weight", value: "180/80" }
    ,
    { field: "high", value: "180" }
    ,
    { field: "weight", value: "80" }
    ,
    { field: "birthday", value: "1989/06/04" }
    ,
    { field: "mail", value: "9999@example.com" }
    ,
    { field: "sex", value: "girl" }
    ,
    { field: "language", value: ["chinese", "english", "japanese"] }
    ,
    { field: "ig", value: "https://www.instagram.com/" }
    ,
    { field: "instagram", value: "https://www.instagram.com/" }
    ,
    { field: "fb", value: "https://www.facebook.com/" }
    ,
    { field: "facebook", value: "https://www.facebook.com/" }
    ,
    { field: "line", value: "" }
    ,
    { field: "wechat", value: "" }
  ];

// 是否強制填寫
const FORCE_FILL = true;

// 標記表單是否已填寫完成
let isFormFilled = false;

// 將日期格式轉換為 YYYY-MM-DD
function formatDate(value) {
  if (typeof value === 'string' && /^\d{4}\/\d{2}\/\d{2}$/.test(value)) {
    return value.replace(/\//g, '-');
  }
  return value;
}

// 模擬延遲
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 清理文字（移除空格、換行符等）
function cleanText(text) {
  return text.replace(/[\n\r\s]+/g, ' ').trim();
}

// 解析 Google 表單的元資料
function parseFormFields() {
  try {
    const scripts = document.querySelectorAll('script');
    let formData = null;
    for (const script of scripts) {
      const content = script.textContent;
      if (content.includes('var FB_PUBLIC_LOAD_DATA_')) {
        const match = content.match(/var FB_PUBLIC_LOAD_DATA_ = ([\s\S]*?);/);
        if (match) {
          let jsonStr = match[1];
          jsonStr = jsonStr.replace(/,\s*,\s*]/g, ',null]');
          formData = JSON.parse(jsonStr);
          break;
        }
      }
    }

    if (!formData || !formData[1] || !formData[1][1]) {
      console.warn("[自動填表] 無法解析表單元資料");
      return [];
    }

    const fields = formData[1][1];
    const fieldInfo = fields
      .map((field) => {
        if (field && field[4] && field[4][0]) {
          const fieldData = {
            title: cleanText(field[1] || ''),
            id: field[4][0][0],
            type: 'TEXT',
            options: null,
          };

          switch (field[3]) {
            case 0:
              fieldData.type = 'TEXT';
              break;
            case 1:
              fieldData.type = 'PARAGRAPH';
              break;
            case 2:
              fieldData.type = 'RADIO';
              fieldData.options = field[4][0][1] ? field[4][0][1].map((opt) => cleanText(opt[0])) : [];
              break;
            case 3:
              fieldData.type = 'LIST';
              fieldData.options = field[4][0][1] ? field[4][0][1].map((opt) => cleanText(opt[0])) : [];
              break;
            case 4:
              fieldData.type = 'CHECKBOX';
              fieldData.options = field[4][0][1] ? field[4][0][1].map((opt) => cleanText(opt[0])) : [];
              break;
            case 9:
              fieldData.type = 'DATE';
              break;
            default:
              fieldData.type = 'TEXT';
          }

          return fieldData;
        }
        return null;
      })
      .filter(Boolean);

    console.log("[自動填表] 解析到的表單欄位:", fieldInfo);
    return fieldInfo;
  } catch (error) {
    console.error("[自動填表] 解析表單元資料失敗:", error);
    return [];
  }
}

// 模擬完整點擊事件
function simulateClick(element) {
  const events = [
    new MouseEvent('mousedown', { bubbles: true }),
    new MouseEvent('click', { bubbles: true }),
    new MouseEvent('mouseup', { bubbles: true }),
    new Event('change', { bubbles: true }),
  ];
  events.forEach((event) => element.dispatchEvent(event));
}

// 填寫表單的函數
async function fillGoogleForm(mappings) {
  if (isFormFilled) {
    console.log("[自動填表] 表單已填寫完成，停止進一步操作。");
    return;
  }

  console.log("[自動填表] 開始填寫表單...");
  console.log("[自動填表] 欄位映射:", mappings);

  // 解析表單元資料
  const formFields = parseFormFields();

  // DOM 選擇器
  const textInputs = document.querySelectorAll('input[type="text"].whsOnd.zHQkBf');
  const emailInputs = document.querySelectorAll('input[type="email"].whsOnd.zHQkBf');
  const dateInputs = document.querySelectorAll('input[type="date"].whsOnd.zHQkBf');
  const radioOptions = document.querySelectorAll('[role="radio"]');
  const checkboxOptions = document.querySelectorAll('.eBFwI [role="checkbox"]'); // 修正選擇器
  const dropdowns = document.querySelectorAll('.jgvuAb[role="listbox"]');

  console.log("[自動填表] 找到的文字輸入框:", textInputs.length);
  console.log("[自動填表] 找到的郵件輸入框:", emailInputs.length);
  console.log("[自動填表] 找到的日期輸入框:", dateInputs.length);
  console.log("[自動填表] 找到的單選框:", radioOptions.length);
  console.log("[自動填表] 找到的複選框:", checkboxOptions.length);
  console.log("[自動填表] 找到的下拉選單:", dropdowns.length);

  // 等待 DOM 載入（確保複選框可用）
  if (checkboxOptions.length === 0) {
    console.warn("[自動填表] 未找到複選框，等待重試...");
    await delay(1000);
    const retryCheckboxOptions = document.querySelectorAll('.eBFwI [role="checkbox"]');
    console.log("[自動填表] 重試後找到的複選框:", retryCheckboxOptions.length);
    if (retryCheckboxOptions.length > 0) {
      checkboxOptions = retryCheckboxOptions; // 更新選擇結果
    }
  }

  // 處理文字輸入框
  textInputs.forEach((input) => {
    const labelElement = input.closest('.geS5n')?.querySelector('.M7eMe');
    if (!labelElement) return;

    const labelText = cleanText(labelElement.textContent);
    const matchedField = mappings.find((mapping) => labelText.includes(mapping.field));
    if (matchedField) {
      const value = Array.isArray(matchedField.value) ? matchedField.value[0] : matchedField.value;
      if (FORCE_FILL || !input.value) {
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        console.log(`[自動填表] 文字輸入框 "${labelText}" 填入: "${value}"`);
      }
    }
  });

  // 處理郵件輸入框
  emailInputs.forEach((input) => {
    const labelElement = input.closest('.geS5n')?.querySelector('.M7eMe');
    if (!labelElement) return;

    const labelText = cleanText(labelElement.textContent);
    const matchedField = mappings.find((mapping) => labelText.includes(mapping.field));
    if (matchedField) {
      const value = Array.isArray(matchedField.value) ? matchedField.value[0] : matchedField.value;
      if (FORCE_FILL || !input.value) {
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        console.log(`[自動填表] 郵件輸入框 "${labelText}" 填入: "${value}"`);
      }
    }
  });

  // 處理日期輸入框
  dateInputs.forEach((input) => {
    const labelElement = input.closest('.geS5n')?.querySelector('.M7eMe');
    if (!labelElement) return;

    const labelText = cleanText(labelElement.textContent);
    const matchedField = mappings.find((mapping) => labelText.includes(mapping.field));
    if (matchedField) {
      const rawValue = Array.isArray(matchedField.value) ? matchedField.value[0] : matchedField.value;
      const formattedValue = formatDate(rawValue);
      if (FORCE_FILL || !input.value) {
        input.value = formattedValue;
        input.dispatchEvent(new Event('change', { bubbles: true }));
        console.log(`[自動填表] 日期輸入框 "${labelText}" 填入: "${formattedValue}"`);
      }
    }
  });

  // 處理單選框
  radioOptions.forEach((option) => {
    const labelElement = option.closest('.geS5n')?.querySelector('.M7eMe');
    if (!labelElement) return;

    const labelText = cleanText(labelElement.textContent);
    const matchedField = mappings.find((mapping) => labelText.includes(mapping.field));
    if (!matchedField) return;

    const values = Array.isArray(matchedField.value) ? matchedField.value : [matchedField.value];
    const optionTextElement = option.closest('.nWQGrd')?.querySelector('.aDTYNe');
    const optionText = optionTextElement ? cleanText(optionTextElement.textContent) : '';

    if (values.includes(optionText)) {
      const isChecked = option.getAttribute('aria-checked') === 'true';
      if (!isChecked || FORCE_FILL) {
        simulateClick(option);
        console.log(`[自動填表] 單選框 "${labelText}" 選擇: "${optionText}"`);
      }
    }
  });

  // 處理複選框
  checkboxOptions.forEach((option, index) => {
    const labelElement = option.closest('.geS5n')?.querySelector('.M7eMe');
    if (!labelElement) {
      console.warn(`[自動填表] 複選框 ${index} 無關聯標籤`);
      return;
    }

    const labelText = cleanText(labelElement.textContent);
    console.log(`[自動填表] 處理複選框 ${index}，標籤: "${labelText}"`);

    const matchedField = mappings.find((mapping) => labelText.includes(mapping.field) || mapping.field.includes(labelText.split('/')[0]));
    if (!matchedField) {
      console.log(`[自動填表] 複選框 ${index} 未匹配映射，標籤: "${labelText}"`);
      return;
    }

    console.log(`[自動填表] 複選框 ${index} 匹配到映射:`, matchedField);

    const matchedFormField = formFields.find((field) => field.type === 'CHECKBOX' && (field.title === labelText || labelText.includes(field.title)));
    if (!matchedFormField) {
      console.warn(`[自動填表] 複選框 ${index} 未在元資料中確認，標籤: "${labelText}"`);
    } else {
      console.log(`[自動填表] 複選框 ${index} 元資料:`, matchedFormField);
    }

    const values = Array.isArray(matchedField.value) ? matchedField.value : [matchedField.value];
    const optionTextElement = option.closest('.eBFwI')?.querySelector('.aDTYNe');
    const optionText = optionTextElement ? cleanText(optionTextElement.textContent) : '';

    console.log(`[自動填表] 複選框 ${index} 選項文字: "${optionText}"，期望值:`, values);

    // 模糊匹配
    const normalizedValues = values.map((v) => cleanText(v).toLowerCase());
    const normalizedOptionText = cleanText(optionText).toLowerCase();

    if (normalizedValues.includes(normalizedOptionText) || values.includes(optionText)) {
      const isChecked = option.getAttribute('aria-checked') === 'true';
      console.log(`[自動填表] 複選框 ${index} 匹配成功，選項: "${optionText}"，已選中: ${isChecked}`);
      if (!isChecked || FORCE_FILL) {
        simulateClick(option);
        console.log(`[自動填表] 複選框 "${labelText}" 選擇: "${optionText}"`);
      } else {
        console.log(`[自動填表] 複選框 "${labelText}" 的 "${optionText}" 已選中，跳過`);
      }
    } else {
      console.log(`[自動填表] 複選框 ${index} 選項 "${optionText}" 未匹配期望值:`, normalizedValues);
    }
  });

  // 處理下拉選單
  for (const dropdown of dropdowns) {
    const labelElement = dropdown.closest('.geS5n')?.querySelector('.M7eMe');
    if (!labelElement) continue;

    const labelText = cleanText(labelElement.textContent);
    const matchedField = mappings.find((mapping) => labelText.includes(mapping.field));
    if (!matchedField) continue;

    const values = Array.isArray(matchedField.value) ? matchedField.value : [matchedField.value];

    if (dropdown.getAttribute('aria-expanded') === 'false') {
      simulateClick(dropdown);
      await delay(1000);
    }

    const options = dropdown.querySelectorAll('.MocG8c.HZ3kWc');
    for (const option of options) {
      const optionText = cleanText(option.textContent);
      const isSelected = option.getAttribute('aria-selected') === 'true';
      if (values.includes(optionText)) {
        if (FORCE_FILL || !isSelected) {
          simulateClick(option);
          console.log(`[自動填表] 下拉選單 "${labelText}" 選擇: "${optionText}"`);
          break;
        }
      }
    }

    if (dropdown.getAttribute('aria-expanded') === 'true') {
      simulateClick(dropdown);
    }
  }

  console.log("[自動填表] 表單填寫完成。");
  isFormFilled = true;
}

// 檢查並自動填寫表單
async function autoFillForm() {
  console.log("[自動填表] autoFillForm 觸發");
  if (fieldMappings.length > 0) {
    await fillGoogleForm(fieldMappings);
  } else {
    console.warn("[自動填表] 未定義欄位映射");
  }
}

// 頁面載入時執行
document.addEventListener('DOMContentLoaded', () => {
  console.log("[自動填表] DOMContentLoaded 觸發");
  autoFillForm();
});

// 使用 MutationObserver 監聽動態內容
const observer = new MutationObserver((mutations) => {
  console.log("[自動填表] MutationObserver 檢測到變化:", mutations.length);
  autoFillForm();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
console.log("[自動填表] MutationObserver 已啟動");
